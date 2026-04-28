'use client'

import { forwardRef } from 'react'

import { useTranslate } from '@/modules/languages/hooks/use-translate'
import { ShareCard } from '@/modules/shared/components/ShareCard'
import { type TranslationKey } from '@/translations/translation.types'

import { type EnneatypeId } from '../../enneatypes.types'

type EnneagramShareCardProps = {
  topType: EnneatypeId
  wing: EnneatypeId
}

export const EnneagramShareCard = forwardRef<HTMLDivElement, EnneagramShareCardProps>(
  ({ topType, wing }, ref) => {
    const t = useTranslate()
    const name = t(`enneatype.${topType}.name` as TranslationKey)
    const subtitle = t(`enneatype.${topType}.subtitle` as TranslationKey)
    const essence = t(`enneatype.${topType}.essence` as TranslationKey)

    return (
      <ShareCard ref={ref}>
        <header>
          <p
            style={{
              fontFamily: 'var(--font-fraunces), ui-serif, serif',
              fontSize: '22px',
              fontWeight: 500,
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: '#c89e5d',
              margin: 0,
              textAlign: 'center',
            }}
          >
            {t('share.quiz.enneagram')}
          </p>
        </header>

        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '100%' }}>
            <img
              src={`/images/enneagram/${topType}.png`}
              alt=''
              width={440}
              height={440}
              style={{
                display: 'block',
                width: '440px',
                height: '440px',
                margin: '0 auto 32px',
              }}
            />
            <div
              style={{
                fontFamily: 'var(--font-fraunces), ui-serif, serif',
                fontSize: '260px',
                fontWeight: 300,
                lineHeight: 0.85,
                letterSpacing: '-0.05em',
                color: '#e0b870',
                margin: 0,
                textAlign: 'center',
              }}
            >
              {topType}
            </div>
            <p
              style={{
                fontFamily: 'var(--font-fraunces), ui-serif, serif',
                fontSize: '56px',
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                color: '#f4ede4',
                margin: '32px 0 12px',
                textAlign: 'center',
              }}
            >
              {name}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-fraunces), ui-serif, serif',
                fontSize: '32px',
                fontStyle: 'italic',
                letterSpacing: '-0.01em',
                color: '#c89e5d',
                margin: 0,
                textAlign: 'center',
              }}
            >
              {subtitle}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-fraunces), ui-serif, serif',
                fontSize: '26px',
                lineHeight: 1.5,
                color: '#c8b896',
                margin: '40px auto 0',
                maxWidth: '800px',
                textAlign: 'center',
              }}
            >
              {essence}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-fraunces), ui-serif, serif',
                fontSize: '22px',
                letterSpacing: '0.08em',
                color: '#8e8270',
                margin: '32px 0 0',
                textAlign: 'center',
              }}
            >
              Wing {wing}
            </p>
          </div>
        </div>

        <footer
          style={{
            borderTop: '1px solid #2a2018',
            paddingTop: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-fraunces), ui-serif, serif',
              fontSize: '20px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#c89e5d',
              margin: 0,
            }}
          >
            {t('share.card.footer')}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-fraunces), ui-serif, serif',
              fontSize: '18px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#5a4e3d',
              margin: 0,
            }}
          >
            enatipos.app
          </p>
        </footer>
      </ShareCard>
    )
  },
)

EnneagramShareCard.displayName = 'EnneagramShareCard'
