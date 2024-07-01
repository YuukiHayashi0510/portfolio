import Link from 'next/link'

export const Header = () => {
  return (
    <header className='flex w-full items-center justify-between bg-gray-900 px-4 py-6 text-white md:fixed md:px-6 lg:px-8'>
      <Link href='/'>
        <h2 className='text-4xl font-bold text-green-400'>
          <span className='hidden lg:inline'>Yuuki Hayashi&rsquo;s </span>
          Portfolio
        </h2>
      </Link>
      <nav className='hidden md:block'>
        <ul className='flex space-x-4'>
          <li>
            <a className='hover:text-green-400' href='#about'>
              About
            </a>
          </li>
          <li>
            <a className='hover:text-green-400' href='#skills'>
              Skills
            </a>
          </li>
          <li>
            <a className='hover:text-green-400' href='#career'>
              Career
            </a>
          </li>
          <li>
            <Link href='/terminal' className='hover:text-green-400'>
              Terminal
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
