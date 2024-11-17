'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface UserData {
  username: string;
}

export default function Video() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/login'); // Redirect to login if no token is present
      return;
    }

    const fetchData = async () => {
      try {
        // Validate the user token
        const res = await fetch('/api/protected', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          const data: { user: UserData } = await res.json();
          setUserData(data.user);

          // Fetch video URL securely
          const videoRes = await fetch('/api/video', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (videoRes.ok) {
            const videoData = await videoRes.json();
            setVideoUrl(videoData.videoUrl); // Get signed video URL
          } else {
            console.error('Failed to fetch video URL');
          }
        } else {
          localStorage.removeItem('token'); // Remove invalid token
          router.push('/login');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-700">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="max-w-lg bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">View Video</h1>
        {userData ? (
          <div>
            <p className="mb-6 text-gray-600 text-center">
              Hi, <span className="font-semibold text-[#fa]">{userData.username}</span>. Enjoy your video!
            </p>
            {videoUrl ? (
              <video
                controls
                src={videoUrl}
                className="w-full rounded border border-gray-300"
              />
            ) : (
              <p className="text-center text-red-500">Failed to load video.</p>
            )}
          </div>
        ) : (
          <p className="text-center text-gray-700">You are not authorized to view this content.</p>
        )}
        <button
          onClick={() => {
            localStorage.removeItem('token'); // Log out
            router.push('/');
          }}
          className="mt-6 w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
