import { memo } from 'react'
import type { IconType } from 'react-icons'

const COLORS = {
  blue: 'text-blue-500 hover:text-blue-600',
  lightblue: 'text-blue-400 hover:text-blue-500',
  pink: 'text-pink-500 hover:text-pink-600',
  green: 'text-green-500 hover:text-green-600',
}

export type IconLinkProps = {
  icon: IconType
  color?: keyof typeof COLORS
  href: string
}

export const IconLink = memo<IconLinkProps>(({ icon, color, href }) => {
  return (
    <a
      className={color ? COLORS[color] : COLORS.blue}
      href={href}
      target='_blank'
    >
      {icon({ className: 'h-6 w-6' })}
    </a>
  )
})

IconLink.displayName = 'IconLink'
