import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest): Promise<NextResponse> {
  return NextResponse.next();
}
