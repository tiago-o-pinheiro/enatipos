'use client'

import { forwardRef, type PropsWithChildren } from 'react'

type ShareCardProps = PropsWithChildren<{
  // Whether the card is visible on-screen. Defaults to false — rendered
  // off-screen so it can be captured without affecting the layout.
  visible?: boolean
}>

const CARD_WIDTH = 1080
const CARD_HEIGHT = 1350

export const ShareCard = forwardRef<HTMLDivElement, ShareCardProps>(
  ({ children, visible = false }, ref) => {
    const positionStyles: React.CSSProperties = visible
      ? { position: 'relative' }
      : {
          position: 'fixed',
          top: 0,
          left: -99999,
          pointerEvents: 'none',
        }

    return (
      <div
        ref={ref}
        aria-hidden='true'
        style={{
          ...positionStyles,
          width: `${CARD_WIDTH}px`,
          height: `${CARD_HEIGHT}px`,
          background:
            'radial-gradient(ellipse at top, #1a1410 0%, #0d0a08 60%, #070503 100%)',
          color: '#ede4d3',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '96px 88px',
          fontFamily: 'var(--font-fraunces), ui-serif, serif',
        }}
      >
        {children}
      </div>
    )
  },
)

ShareCard.displayName = 'ShareCard'
