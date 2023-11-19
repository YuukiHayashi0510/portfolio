import { Meta, StoryObj } from '@storybook/react'
import { SkillBar } from '~/components/SkillBar'

const meta: Meta<typeof SkillBar> = {
  component: SkillBar,
}

export default meta

type Story = StoryObj<typeof SkillBar>

export const Default: Story = {
  args: {
    name: 'React',
    level: 3,
  },
}

export const NextJS: Story = {
  args: {
    name: 'Next.js',
    level: 4,
  },
}

export const Level0: Story = {
  args: {
    name: 'React',
    level: 0,
  },
}

export const LevelMax: Story = {
  args: {
    name: 'React',
    level: 5,
  },
}

export const FloatLevel: Story = {
  args: {
    name: 'React',
    level: 3.45,
  },
}
