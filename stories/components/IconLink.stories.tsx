import { Meta, StoryObj } from '@storybook/react'
import { LuGithub } from 'react-icons/lu'
import { IconLink } from '~/components/IconLink'

const meta: Meta<typeof IconLink> = {
  component: IconLink,
}

export default meta

type Story = StoryObj<typeof IconLink>

export const Default: Story = {
  args: {
    icon: LuGithub,
  },
}

export const LightBlue: Story = {
  args: {
    icon: LuGithub,
    color: 'lightblue',
  },
}

export const Green: Story = {
  args: {
    icon: LuGithub,
    color: 'green',
  },
}

export const Pink: Story = {
  args: {
    icon: LuGithub,
    color: 'pink',
  },
}
