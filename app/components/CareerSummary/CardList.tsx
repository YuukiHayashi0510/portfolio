const COLORS = [
  'bg-green-400',
  'bg-blue-400',
  'bg-yellow-400',
  'bg-red-400',
  'bg-pink-400',
  'bg-indigo-400',
  'bg-purple-400',
]

const DATA: Data[] = [
  {
    year: 23,
    title: 'Web, Mobile Application Engineer',
    affiliation: 'Uzu Inc.',
    description:
      "Worked on developing the company's main product, a complex application.",
  },
  {
    year: 22,
    title: 'Web Application Engineer',
    affiliation: 'UKIYOcreate Co.',
    description:
      "Worked on developing and maintaining the company's product, a complex web application.",
  },
  {
    year: 21,
    title: 'Frontend Engineer',
    affiliation: '23 Co.',
    description:
      'Contributed primarily to web front-end and mobile projects, developing features and fixing bugs.',
  },
  {
    year: 20,
    title: 'University Student',
    affiliation: 'Fukuoka Univ.',
    description:
      'Started learning Computer Science and started creating simple websites like HTML/CSS',
  },
]

type Data = {
  year: number
  title: string
  affiliation: string
  description: string
}

export const CardList = () => {
  return (
    <div className='mt-5 space-y-4 md:space-y-6'>
      {DATA.map((data, i) => {
        return (
          <div className='flex items-center' key={i}>
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-gray-800 ${
                COLORS[i % COLORS.length]
              }`}
            >
              &apos;{data.year}
            </div>
            <div className='ml-5'>
              <h3 className='text-xl font-bold'>{data.title}</h3>
              <p className='text-gray-400'>{data.affiliation}</p>
              <p className='text-gray-400'>{data.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
