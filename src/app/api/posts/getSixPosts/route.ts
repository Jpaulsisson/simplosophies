import prisma from '@/database';
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const posts = await prisma.posts.findMany({ take: 6 })
    if (posts && posts.length > 0) {
      return NextResponse.json({
        data: posts,
        success: true,
        message: "Posts got gotted."
      })
    } else {
      return NextResponse.json({
        success: false,
        message: "Posts... nah no recent posts bruh."
      })
    }
  } catch (error) {

    return NextResponse.json({
      success: false,
      message: ["Something went wrong", error]
    })
  }
}