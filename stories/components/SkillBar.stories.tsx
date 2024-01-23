import { Meta, StoryObj } from '@storybook/react'
import { SkillBar } from '~/components/SkillBar'

const meta: Meta<typeof SkillBar> = {
  component: SkillBar,
}

export default meta

type Story = StoryObj<typeof SkillBar>

export const Default: Story = {
  args: {
    language: 'React',
    level: 3,
  },
}

export const NextJS: Story = {
  args: {
    language: 'Next.js',
    level: 4,
  },
}

export const Level0: Story = {
  args: {
    language: 'React',
    level: 0,
  },
}

export const LevelMax: Story = {
  args: {
    language: 'React',
    level: 5,
  },
}

export const FloatLevel: Story = {
  args: {
    language: 'React',
    level: 3.45,
  },
}
