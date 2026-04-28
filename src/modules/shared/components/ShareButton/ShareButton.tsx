'use client'

import { useTranslate } from '@/modules/languages/hooks/use-translate'

type ShareState = 'idle' | 'preparing' | 'shared' | 'downloaded' | 'copied' | 'failed'

type ShareButtonProps = {
  onClick: () => void
  state: ShareState
}

const STATE_KEY: Record<ShareState, 'share.button' | 'share.preparing' | 'share.copied' | 'share.downloaded' | 'share.failed'> = {
  idle: 'share.button',
  preparing: 'share.preparing',
  shared: 'share.button',
  downloaded: 'share.downloaded',
  copied: 'share.copied',
  failed: 'share.failed',
}

export const ShareButton = ({ onClick, state }: ShareButtonProps) => {
  const t = useTranslate()
  const disabled = state === 'preparing'
  const labelKey = STATE_KEY[state]

  return (
    <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      aria-label={t('share.button.aria-label')}
      className='inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-[2px] bg-gold-400 px-6 py-4 font-display text-[15px] font-medium tracking-[0.05em] text-ink-800
                 transition-all duration-200 ease-out
                 hover:bg-gold-400/90 active:scale-[0.985]
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900
                 disabled:cursor-wait disabled:opacity-70'
    >
      <ShareIcon />
      <span>{t(labelKey)}</span>
    </button>
  )
}

const ShareIcon = () => (
  <svg
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
  >
    <path d='M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8' />
    <polyline points='16 6 12 2 8 6' />
    <line x1='12' y1='2' x2='12' y2='15' />
  </svg>
)
