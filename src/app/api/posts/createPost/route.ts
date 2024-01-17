import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const postData = await request.json();

    console.log(postData)



  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Something went wrong"
    })
  }
}