'use client'

import { toBlob } from 'html-to-image'
import { useCallback, useRef, useState } from 'react'

type ShareState =
  | 'idle'
  | 'preparing'
  | 'shared'
  | 'downloaded'
  | 'copied'
  | 'failed'

type ShareParams = {
  title?: string
  text?: string
  url?: string
}

type UseShareCard = {
  cardRef: React.RefObject<HTMLDivElement | null>
  shareAsImage: (params: ShareParams) => Promise<void>
  state: ShareState
  resetState: () => void
}

const downloadFile = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

const openWhatsApp = (text: string) => {
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

// Resolve next/font CSS variables to a concrete font-family string so
// html-to-image doesn't lose them when it rebuilds styles on the clone.
const resolveFontVar = (name: string, fallback: string): string => {
  if (typeof window === 'undefined') return fallback
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim()
  return value ? `${value}, ${fallback}` : fallback
}

export const useShareCard = (filename: string): UseShareCard => {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [state, setState] = useState<ShareState>('idle')

  const resetState = useCallback(() => setState('idle'), [])

  const shareAsImage = useCallback(
    async ({ title, text, url }: ShareParams) => {
      const node = cardRef.current
      if (!node) return

      setState('preparing')

      try {
        // Make sure web fonts are loaded before capturing — otherwise
        // html-to-image may render fallback fonts.
        if (document.fonts && typeof document.fonts.ready?.then === 'function') {
          await document.fonts.ready
        }

        // Wait for every <img> inside the card to fully decode — otherwise
        // html-to-image may serialize a not-yet-loaded image and the capture
        // ends up blank/black.
        const images = Array.from(node.querySelectorAll('img'))
        await Promise.all(
          images.map((img) =>
            img.complete && img.naturalWidth > 0
              ? img.decode().catch(() => undefined)
              : new Promise<void>((resolve) => {
                  img.addEventListener('load', () => resolve(), { once: true })
                  img.addEventListener('error', () => resolve(), { once: true })
                }),
          ),
        )

        // Temporarily apply the resolved font-family to the card node so the
        // clone carries it directly (CSS variables set on <html> don't always
        // survive html-to-image's cloning on every browser).
        const resolvedDisplay = resolveFontVar('--font-fraunces', 'ui-serif, serif')
        const resolvedSans = resolveFontVar('--font-instrument-sans', 'system-ui, sans-serif')
        const prevFont = node.style.fontFamily
        node.style.setProperty('--font-fraunces', resolvedDisplay)
        node.style.setProperty('--font-instrument-sans', resolvedSans)
        node.style.fontFamily = resolvedDisplay

        const blob = await toBlob(node, {
          pixelRatio: 2,
          backgroundColor: '#0d0a08',
          // Override positioning on the cloned root so it renders at 0,0
          // inside the SVG foreignObject regardless of how the original is
          // hidden in the page.
          style: {
            position: 'static',
            top: '0',
            left: '0',
            zIndex: 'auto',
            pointerEvents: 'auto',
          },
        })

        // Restore styles
        node.style.fontFamily = prevFont
        node.style.removeProperty('--font-fraunces')
        node.style.removeProperty('--font-instrument-sans')

        if (!blob) throw new Error('Failed to generate image blob')

        const file = new File([blob], filename, { type: 'image/png' })
        const shareText = text ?? ''

        const shareData: ShareData & { files?: File[] } = {
          title,
          text: shareText,
          url,
          files: [file],
        }

        const canShareFull =
          typeof navigator.canShare === 'function' &&
          navigator.canShare(shareData)

        if (canShareFull && typeof navigator.share === 'function') {
          try {
            await navigator.share(shareData)
            setState('shared')
            return
          } catch (err) {
            if ((err as Error).name === 'AbortError') {
              setState('idle')
              return
            }
            // Any other error — fall through to download fallback.
          }
        }

        // Desktop / unsupported fallback: download + open WhatsApp web.
        downloadFile(blob, filename)
        if (shareText || url) {
          openWhatsApp(`${shareText}${url ? ` ${url}` : ''}`)
        }
        setState('downloaded')
      } catch (err) {
        console.error('[share] failed to generate image', err)
        setState('failed')
      }
    },
    [filename],
  )

  return { cardRef, shareAsImage, state, resetState }
}
