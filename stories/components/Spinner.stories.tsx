import { Meta, StoryObj } from '@storybook/react'
import { Spinner } from '~/components/Spinner'

const meta: Meta<typeof Spinner> = {
  component: Spinner,
}

export default meta

type Story = StoryObj<typeof Spinner>

export const Default: Story = {}
