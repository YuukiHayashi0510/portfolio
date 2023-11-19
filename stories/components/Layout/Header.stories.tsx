import { Meta, StoryObj } from '@storybook/react'
import { Header } from '~/components/Layout/Header'

const meta: Meta<typeof Header> = {
  component: Header,
}

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {}
