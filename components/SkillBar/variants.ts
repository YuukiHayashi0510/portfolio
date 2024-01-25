import { tv } from 'tailwind-variants'

// Skill: Next.js TypeScript, Python, Ruby on Rails, Go, Flutter,
export const skillText = tv({
  base: 'text-lg font-bold',
  variants: {
    language: {
      React: 'text-blue-500',
      Python: 'text-blue-400',
      'Ruby on Rails': 'text-red-500',
      TypeScript: 'text-blue-500',
      Flutter: 'text-sky-400',
      'Next.js':
        'bg-gradient-to-br from-nextjs-start via-nextjs-mid to-nextjs-end bg-clip-text text-transparent',
      Go: 'text-sky-500',
      SQL: 'text-purple-500',
    },
  },
})

export const skillBar = tv({
  base: 'h-full rounded-lg',
  variants: {
    language: {
      React: 'bg-blue-500',
      Python: 'bg-blue-400',
      'Ruby on Rails': 'bg-red-500',
      TypeScript: 'bg-blue-500',
      Flutter: 'bg-sky-400',
      'Next.js':
        'bg-gradient-to-br from-nextjs-start via-nextjs-mid to-nextjs-end',
      Go: 'bg-sky-500',
      SQL: 'bg-purple-500',
    },
  },
})
