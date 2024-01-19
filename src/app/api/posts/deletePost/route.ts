import { NextRequest, NextResponse } from 'next/server'

export async function DELETE(request: NextRequest) {
  try {

    const url = new URL(request.url);
    const itemToDelete = url.searchParams.get('postId')

  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Something went wrong"
    })
  }
}