import { memo } from 'react'
import { roundToNthDecimal } from '~/lib/format'
import { skillBar, skillText } from './variants'

const MAX_LEVEL = 5

export type SkillBarProps = {
  language: keyof typeof skillText.variants.language
  level: number
}

export const SkillBar = memo<SkillBarProps>(({ language, level }) => {
  const levelPercent =
    level > MAX_LEVEL ? 100 : roundToNthDecimal((level / MAX_LEVEL) * 100, 2)

  return (
    <div className='grid gap-1'>
      <h3 className={skillText({ language })}>{language}</h3>
      <div className='h-2 w-full rounded-lg bg-gray-600'>
        <div
          className={skillBar({ language })}
          style={{ width: `${levelPercent}%` }}
        />
      </div>
      <p className='text-sm text-gray-300'>
        Skill Level: {roundToNthDecimal(level, 2)}/5
      </p>
    </div>
  )
})

SkillBar.displayName = 'SkillBar'
