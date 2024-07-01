import { ALLOWED_COMMANDS } from './const'

export interface CommandOutput {
  command: string
  output: React.ReactNode
}

export type AllowedCommand = (typeof ALLOWED_COMMANDS)[number]
