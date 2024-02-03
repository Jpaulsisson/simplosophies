import prisma from '@/database';
import { NextRequest, NextResponse } from 'next/server'

export async function DELETE(request: NextRequest) {
  try {

    const url = new URL(request.url);
    const blogId = url.searchParams.get('postId');

    const post = await prisma.posts.delete({
      where: {
        postId: blogId as string
      }
    })

    return NextResponse.json({
      data: post,
      success: true,
      message: 'Deleted the blog yo.'
    })

  } catch (error) {

    return NextResponse.json({
      success: false,
      message: "Something went wrong"
    })
  }
}