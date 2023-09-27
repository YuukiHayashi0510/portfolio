import { Post, User } from '@prisma/client'

export type CreatePostData = {
  title: string
  description: string
  userId: string
}

export type UpdatePostData = {
  id: string
  title: string
  description: string
}

export type UpdatePostBody = {
  title: string
  description: string
}

// 参考:https://www.prisma.io/docs/concepts/components/prisma-client/advanced-type-safety/operating-against-partial-structures-of-model-types#problem-using-variations-of-the-generated-model-type
export type PostWithUser = Post & {
  user: User
}
