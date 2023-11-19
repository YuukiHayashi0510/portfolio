import { SkillBar } from '~/components/SkillBar'

export const Skills = () => {
  return (
    <section
      className='mx-auto grid max-w-full items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3'
      id='skills'
    >
      <SkillBar level={4.56} name='Next.js' />
      <SkillBar level={4.1} name='TypeScript' />
      <SkillBar level={3.8} name='Python' />
      <SkillBar level={3.1} name='Ruby on Rails' />
      <SkillBar level={3} name='Go' />
      <SkillBar level={2.8} name='Flutter' />
    </section>
  )
}
