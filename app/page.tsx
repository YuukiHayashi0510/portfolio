import { About } from './components/About'
import { CareerSummary } from './components/CareerSummary'
import { Skills } from './components/Skills'

export default function Home() {
  return (
    <div className='w-full bg-gray-800 py-12 text-white md:py-24 lg:py-32'>
      <div className='container space-y-8 px-4 md:space-y-12 md:px-6'>
        <About />
        <Skills />
        <div className='min-w-full:flex-row flex flex-col justify-center gap-8 md:gap-12'>
          <CareerSummary />
          {/* <div className='my-10 w-full'>
            <h2 className='text-3xl font-bold text-green-400'>Achievements</h2>
            <div className='mt-5 space-y-4 md:space-y-6'>
              <div className='flex items-center space-x-4'>
                <img
                  alt='Product 1'
                  height='64'
                  src='/vercel.svg'
                  style={{
                    aspectRatio: '64/64',
                    objectFit: 'cover',
                  }}
                  width='64'
                />
                <div>
                  <h3 className='text-xl font-bold'>Product 1</h3>
                  <p className='text-gray-400'>
                    Worked on the development of Product 1, helping to improve
                    its performance and user experience.
                  </p>
                </div>
              </div>
              <div className='flex items-center space-x-4'>
                <img
                  alt='Product 2'
                  height='64'
                  src='/vercel.svg'
                  style={{
                    aspectRatio: '64/64',
                    objectFit: 'cover',
                  }}
                  width='64'
                />
                <div>
                  <h3 className='text-xl font-bold'>Product 2</h3>
                  <p className='text-gray-400'>
                    Contributed to the development of Product 2, implementing
                    several crucial features.
                  </p>
                </div>
              </div>
              <div className='flex items-center space-x-4'>
                <img
                  alt='Product 3'
                  height='64'
                  src='/vercel.svg'
                  style={{
                    aspectRatio: '64/64',
                    objectFit: 'cover',
                  }}
                  width='64'
                />
                <div>
                  <h3 className='text-xl font-bold'>Product 3</h3>
                  <p className='text-gray-400'>
                    Was part of the team that developed Product 3, playing a key
                    role in its design and development.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
