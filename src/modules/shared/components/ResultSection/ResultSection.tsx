type ResultSectionAccent = 'gold-500' | 'gold-400' | 'rust'

type ResultSectionProps = {
  label: string
  body: string
  accent?: ResultSectionAccent
}

const ACCENT_CLASSES: Record<ResultSectionAccent, string> = {
  'gold-500': 'text-gold-500',
  'gold-400': 'text-gold-400',
  rust: 'text-rust',
}

export const ResultSection = ({
  label,
  body,
  accent = 'gold-500',
}: ResultSectionProps) => (
  <section className='mt-6'>
    <p
      className={`mb-2 font-display text-xs font-medium uppercase tracking-[0.2em] ${ACCENT_CLASSES[accent]}`}
    >
      {label}
    </p>
    <p className='text-base leading-[1.6] text-cream-200'>{body}</p>
  </section>
)
