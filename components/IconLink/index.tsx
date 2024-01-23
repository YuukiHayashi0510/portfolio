import { memo } from 'react'
import { iconLink } from './variants'
import type { IconType } from 'react-icons'

export type IconLinkProps = {
  icon: IconType
  color?: keyof typeof iconLink.variants.color
  href: string
}

export const IconLink = memo<IconLinkProps>(({ icon, color, href }) => {
  return (
    <a className={iconLink({ color })} href={href} target='_blank'>
      {icon({ className: 'h-6 w-6' })}
    </a>
  )
})

IconLink.displayName = 'IconLink'
