import { ALLOWED_COMMANDS } from './const'

export type CommandOutput = {
  command: string
  output: React.ReactNode
}

export type AllowedCommand = (typeof ALLOWED_COMMANDS)[number]
