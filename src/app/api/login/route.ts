import fs from 'fs';
import path from 'path';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

const JWT_ = process.env.JWT_ as string;

interface User {
  username: string;
  password: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const { username, password } = await req.json();

  // Load the user data
  const filePath = path.join(process.cwd(), 'data', 'users.json');
  const users: User[] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  // Validate the credentails
  const user = users.find((u: User) => u.username === username && u.password === password);

  if (!user) {
    return new NextResponse(JSON.stringify({ error: 'Invalid username or password' }), { status: 401 });
  }

  // Generate a JWT token
  const token = jwt.sign({ username }, JWT_, { expiresIn: '1h' });

  // Return the tkoen
  return new NextResponse(JSON.stringify({ token }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
