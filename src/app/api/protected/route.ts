import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string;

export async function GET(req: NextRequest): Promise<NextResponse> {
  const authHeader = req.headers.get('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET_KEY) as jwt.JwtPayload;
    return new NextResponse(JSON.stringify({ message: 'Protected data', user: decoded }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new NextResponse(JSON.stringify({ error: 'Invalid or expired token' }), { status: 401 });
  }
}
