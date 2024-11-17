import { NextRequest, NextResponse } from 'next/server';
import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-2',
});

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const token = authHeader.split(' ')[1];

  // Validate the jwttoken by calling the protected route
  const validationResponse = await fetch(`${req.nextUrl.origin}/api/protected`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!validationResponse.ok) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const bucket = 'lastcallmedia-gonzalo';
  const key = 'screen_rec.mov';

  try {
    const signedUrl = s3.getSignedUrl('getObject', {
      Bucket: bucket,
      Key: key,
      Expires: 600, // have set this to exp in 10 min
    });

    return NextResponse.json({ videoUrl: signedUrl });
  } catch (error) {
    console.error('Error generating signed URL:', error);
    return NextResponse.json({ error: 'Failed to generate video URL' }, { status: 500 });
  }
}
