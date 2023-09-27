import { Post, User } from '@prisma/client'
import {
  createPost,
  findPostAll,
  findPostById,
  deletePost,
  updatePost,
} from '~/app/api/post/service'
import prisma, { cleanUpDatabase } from '~/lib/prisma'
import { CreatePostData, UpdatePostData } from '~/types/api/post'

describe('Post Service Test', () => {
  let post: Post
  let user: User

  async function createData() {
    const name = 'test user'
    user = await prisma.user.create({
      data: {
        name,
        email: 'user@test.com',
        password: 'test',
      },
    })

    post = await prisma.post.create({
      data: {
        title: 'test',
        description: '',
        userId: user.id,
      },
    })
  }

  beforeEach(async () => {
    await cleanUpDatabase()
    await createData()
  })

  afterAll(async () => {
    await cleanUpDatabase()
    await prisma.$disconnect()
  })

  describe('Create', () => {
    it('Create One Success', async () => {
      const data: CreatePostData = {
        title: '',
        description: '',
        userId: user.id,
      }
      const res = await createPost(data)

      expect(res).toMatchObject(data)
    })
  })

  describe('Read', () => {
    it('Read All', async () => {
      const count = await prisma.post.count()
      const allPosts = await findPostAll()

      expect(allPosts.length).toBe(count)
    })

    it('Find by ID', async () => {
      const res = await findPostById(post.id)
      expect(res).toMatchObject(post)
    })
  })

  describe('Update', () => {
    it('Update One', async () => {
      const data: UpdatePostData = {
        id: post.id,
        title: 'update',
        description: post.description ?? '',
      }

      const res = await updatePost(data)
      expect(res).toMatchObject(data)
    })
  })

  describe('Delete', () => {
    it('Delete One', async () => {
      await deletePost(post.id)

      const postCount = await prisma.post.count()
      expect(postCount).toBe(0)
    })
  })
})
