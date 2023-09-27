import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const FAKE_POST = 10

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'seed user',
      email: 'seed@test.com',
      password: 'seed',
    },
  })

  const fakePostList = []
  for (let i = 0; i < FAKE_POST; i++)
    fakePostList.push({
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      userId: user.id,
    })

  await prisma.post.createMany({
    data: fakePostList,
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    // eslint-disable-next-line no-console
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
