import { HttpStatusCode } from 'axios'
import { NextResponse } from 'next/server'
import { prismaErrorHandler } from '~/lib/prisma'
import { deletePost, findPostById, updatePost } from '../service'

export async function GET(_: Request, context: { params: { id: string } }) {
  const id = context.params.id
  try {
    const post = await findPostById(id)

    return NextResponse.json({ post }, { status: HttpStatusCode.Ok })
  } catch (err) {
    const { message, statusCode } = prismaErrorHandler(err)
    return NextResponse.json({ message }, { status: statusCode })
  }
}

export async function PUT(request: Request) {
  try {
    const formData = await request.formData()
    const id = formData.get('id')
    const title = formData.get('title')
    const description = formData.get('description')

    try {
      const post = await updatePost({
        id: id as string,
        title: title as string,
        description: description as string,
      })

      return NextResponse.json({ post }, { status: HttpStatusCode.Ok })
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

export async function DELETE(_: Request, context: { id: string }) {
  const id = context.id

  try {
    const post = await deletePost(id)
    return NextResponse.json({ post }, { status: HttpStatusCode.NoContent })
  } catch (err) {
    const { message, statusCode } = prismaErrorHandler(err)
    return NextResponse.json({ message }, { status: statusCode })
  }
}
