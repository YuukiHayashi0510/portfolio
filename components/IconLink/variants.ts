import { tv } from 'tailwind-variants'

export const iconLink = tv({
  variants: {
    color: {
      blue: 'text-blue-500 hover:text-blue-600',
      lightblue: 'text-blue-400 hover:text-blue-500',
      pink: 'text-pink-500 hover:text-pink-600',
      green: 'text-green-500 hover:text-green-600',
    },
  },
  defaultVariants: {
    color: 'blue',
  },
})
