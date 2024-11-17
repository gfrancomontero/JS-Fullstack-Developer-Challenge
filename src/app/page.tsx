import Link from 'next/link';

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <div className="max-w-lg text-center bg-white p-8">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">App for Last Call Media</h1>
        <Link href="/login" className="px-4 mb-4 py-2 text-black hover:bg-black hover:text-white transition border border-gray-500">
            Login
        </Link>
        <p className="my-6 text-gray-400">
          This app allows you to securely access and view a video hosted on AWS.
        </p>
        <p className="mb-6 text-gray-400">
          Made with ♥ by <Link href="https://gonzalofranco.com" target="_blank" className="text-blue-500 underline">Gonzalo Franco</Link>.
        </p>
      </div>
    </div>
  );
}
