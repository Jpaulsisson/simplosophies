import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server'

const dateInfoToken = process.env.HISTORY_API_ACCESS_TOKEN as string;

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const month = url.searchParams.get('month');
    const day = url.searchParams.get('day');

    const { data } = await axios.get(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`, { headers: { Authorization: `Bearer ${dateInfoToken}`, "Api-User-Agent": "Blog" }} )

    return NextResponse.json({
      data: data,
      success: true,
      message: 'Date data pulled.'
    })

  } catch (error) {

    return NextResponse.json({
      error: error,
      success: false,
      message: "Something went wrong"
    })
  }
}