import prisma from '@/database';
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const postData = await request.json();
    console.log(postData)
    const newPost = await prisma.posts.create({
      data: postData,
    })

    if (newPost) {
      return NextResponse.json({
        success: true,
        message: "New post created!"
      })
    } else {
      return NextResponse.json({
        success: false,
        message: "New post was not created. Something went wrong. Try again and then check your code Paul."
      })
    }

  } catch (error) {

    return NextResponse.json({
      success: false,
      message: "Something went wrong"
    })
  }

}