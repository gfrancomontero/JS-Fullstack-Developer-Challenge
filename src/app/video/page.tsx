'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface UserData {
  username: string;
}

export default function Video() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/login'); // Redirect to login if no token peresent
      return;
    }

    const fetchData = async () => {
      const res = await fetch('/api/protected', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data: { user: UserData } = await res.json();
        setUserData(data.user); // set user data
      } else {
        localStorage.removeItem('token'); // Remove invalid token
        router.push('/login'); // push back to login
      }
    };

    fetchData();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white">
        <h1 className="text-3xl font-bold text-center text-black mb-6">View Video</h1>
        {userData ? (
          <div className="space-y-4">
            <p className="text-lg text-center mb-6">
              <span className="font-semibold text-[#fa]">Hi,</span> {userData.username} you are logged in.
            </p>
            <h3>HERE WE EILL PUT A PLACEHODLDER FOR THE VIDEO</h3>
          </div>
        ) : (
          <p className="text-center text-gray-700">Loading user data...</p>
        )}
        <button
          onClick={() => {
            localStorage.removeItem('token'); // Log out
            router.push('/');
          }}
          className="w-full py-2 border border-gray-300 hover:bg-[#fa]"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
