'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { About } from '~/app/components/About'
import { CareerSummary } from '~/app/components/CareerSummary'
import { Skills } from '~/app/components/Skills'
import { ALLOWED_COMMANDS, WELCOME_MSG } from './const'
import { CommandOutput, AllowedCommand } from './type'

const Terminal: React.FC = () => {
  const [input, setInput] = useState<string>('')
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: '',
      output: WELCOME_MSG,
    },
  ])

  const inputRef = useRef<HTMLInputElement>(null)
  const outputRef = useRef<HTMLDivElement>(null)

  const focusInput = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    focusInput()
  }, [focusInput])

  useEffect(() => {
    outputRef.current?.scrollTo(0, outputRef.current.scrollHeight)
  }, [history])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    processCommand(input as AllowedCommand)
    setInput('')
  }

  const processCommand = (cmd: AllowedCommand) => {
    let output: React.ReactNode

    switch (cmd) {
      case 'help':
        output = `Available commands: ${ALLOWED_COMMANDS.join(', ')}`
        break
      case 'about':
        output = <About />
        break
      case 'skills':
        output = <Skills />
        break
      case 'career':
        output = <CareerSummary />
        break
      case 'welcome':
        output = <span>{WELCOME_MSG}</span>
        break
      case 'clear':
        setHistory([])
        return
      case '':
        output = <span>$&nbsp;</span>
        break
      default:
        output = `Command not found: ${cmd}. Type "help" for available commands.`
    }

    setHistory((prev) => [...prev, { command: cmd, output }])
  }

  return (
    <div
      className='min-h-screen bg-black p-4 pt-32 font-mono text-green-500'
      onClick={focusInput}
    >
      <div ref={outputRef} className='mb-4 flex-grow'>
        {history.map((item, index) => (
          <div key={index}>
            {item.command && <div>$ {item.command}</div>}
            <div>{item.output}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className='flex'>
        <span>$&nbsp;</span>
        <input
          type='text'
          value={input}
          onChange={handleInputChange}
          ref={inputRef}
          className='flex-grow bg-black text-green-500 focus:outline-none'
        />
      </form>
    </div>
  )
}

export default Terminal
