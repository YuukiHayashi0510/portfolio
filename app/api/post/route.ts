import { HttpStatusCode } from 'axios'
import { NextRequest, NextResponse } from 'next/server'
import prisma, { prismaErrorHandler } from '~/lib/prisma'
import { createPost } from './service'

const PER_PAGE = 10

export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get('page') ?? '1'
  const currentPage = parseInt(page, 10)

  try {
    const posts = await prisma.post.findMany({
      skip: (currentPage - 1) * PER_PAGE,
      take: PER_PAGE,
      orderBy: {
        createdAt: 'desc',
      },
    })

    const totalPosts = await prisma.post.count()
    const totalPages = Math.ceil(totalPosts / PER_PAGE)

    return NextResponse.json(
      { posts, totalPages },
      { status: HttpStatusCode.Ok },
    )
  } catch (err) {
    const { message, statusCode } = prismaErrorHandler(err)
    return NextResponse.json({ message }, { status: statusCode })
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const title = formData.get('title')
    const description = formData.get('description')
    const userId = formData.get('userId')

    if (!title || !description || !userId)
      return NextResponse.json({ message: 'Invalid request' }, { status: 400 })

    try {
      const post = await createPost({
        title: title as string,
        description: description as string,
        userId: userId as string,
      })

      return NextResponse.json({ post }, { status: HttpStatusCode.Created })
    } catch (err) {
      const { message, statusCode } = prismaErrorHandler(err)
      return NextResponse.json({ message }, { status: statusCode })
    }
  } catch (err) {
    if (err instanceof Error)
      return NextResponse.json(
        { message: err.message },
        { status: HttpStatusCode.InternalServerError },
      )
  }
}
