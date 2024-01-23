import { SkillBar } from '~/components/SkillBar'

export const Skills = () => {
  return (
    <section
      className='mx-auto grid max-w-full items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3'
      id='skills'
    >
      <SkillBar language='Next.js' level={4.56} />
      <SkillBar language='TypeScript' level={4.1} />
      <SkillBar language='Python' level={3.8} />
      <SkillBar language='Ruby on Rails' level={3.1} />
      <SkillBar language='Go' level={3} />
      <SkillBar language='Flutter' level={2.8} />
    </section>
  )
}
