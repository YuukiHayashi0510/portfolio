import { memo } from 'react'
import { twMerge } from 'tailwind-merge'
import { roundToNthDecimal } from '~/lib/format'

const MAX_LEVEL = 5

// Skill: Next.js TypeScript, Python, Ruby on Rails, Go, Flutter,
const SKILL_COLORS = {
  React: { text: 'text-blue-500', bg: 'bg-blue-500' },
  Python: { text: 'text-blue-400', bg: 'bg-blue-400' },
  'Ruby on Rails': { text: 'text-red-500', bg: 'bg-red-500' },
  TypeScript: { text: 'text-blue-500', bg: 'bg-blue-500' },
  Flutter: {
    text: 'text-sky-400',
    bg: 'bg-sky-400',
  },
  'Next.js': {
    text: 'text-transparent bg-gradient-to-br from-nextjs-start via-nextjs-mid to-nextjs-end bg-clip-text',
    bg: 'bg-gradient-to-br from-nextjs-start via-nextjs-mid to-nextjs-end',
  },
  Go: { text: 'text-sky-500', bg: 'bg-sky-500' },
  SQL: { text: 'text-purple-500', bg: 'bg-purple-500' },
}

export type SkillBarProps = {
  name: keyof typeof SKILL_COLORS
  level: number
}

export const SkillBar = memo<SkillBarProps>(({ name, level }) => {
  const { text, bg } = SKILL_COLORS[name]
  const nameClass = twMerge('text-lg font-bold', text)
  const barClass = twMerge('h-full rounded-lg', bg)

  const levelPercent =
    level > MAX_LEVEL ? 100 : roundToNthDecimal((level / MAX_LEVEL) * 100, 2)

  return (
    <div className='grid gap-1'>
      <h3 className={nameClass}>{name}</h3>
      <div className='h-2 w-full rounded-lg bg-gray-600'>
        <div className={barClass} style={{ width: `${levelPercent}%` }} />
      </div>
      <p className='text-sm text-gray-300'>
        Skill Level: {roundToNthDecimal(level, 2)}/5
      </p>
    </div>
  )
})

SkillBar.displayName = 'SkillBar'
