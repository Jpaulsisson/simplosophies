import prisma from '@/database';
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {

    const url = new URL(request.url);
    const blogId = url.searchParams.get('postId');

    const post = await prisma.posts.findFirst({
      where: {
        postId: {
          equals: blogId as string,
        }
      }
    })

    return NextResponse.json({
      data: post,
      success: true,
      message: 'Blog data pulled.'
    })

  } catch (error) {

    return NextResponse.json({
      success: false,
      message: "Something went wrong"
    })
  }
}