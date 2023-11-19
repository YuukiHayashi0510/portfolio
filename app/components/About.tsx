import { LuGithub } from 'react-icons/lu'
import { RiTwitterXLine } from 'react-icons/ri'
import { SiQiita, SiZenn } from 'react-icons/si'
import { IconLink } from '~/components/IconLink'

export const About = () => {
  return (
    <section
      className='flex w-full flex-col items-start justify-center space-y-4 text-left lg:max-w-5xl'
      id='about'
    >
      <h1 className='text-4xl font-bold tracking-tighter text-green-400 sm:text-5xl'>
        Yuuki Hayashi
      </h1>
      <p className='text-xl font-semibold text-blue-300 sm:text-2xl'>
        Web Application Engineer
      </p>
      <p className='max-w-full text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
        Software Engineer with 2+ years of web application development
        experience. Passionate about clean code and continuous learning in
        different technical areas such as web, mobile and backend.
      </p>
      <p className='text-lg font-semibold text-gray-400 sm:text-xl'>
        Qualifications: Fundamental Information Technology Engineer Examination
      </p>
      <div className='flex space-x-4'>
        <IconLink
          color='blue'
          href='https://github.com/YuukiHayashi0510'
          icon={LuGithub}
        />
        <IconLink
          color='green'
          href='https://qiita.com/yuuki-h'
          icon={SiQiita}
        />
        <IconLink
          color='lightblue'
          href='https://zenn.dev/rinrin_yuuki'
          icon={SiZenn}
        />
        <IconLink
          color='pink'
          href='https://twitter.com/Yuukih52144351'
          icon={RiTwitterXLine}
        />
      </div>
    </section>
  )
}
