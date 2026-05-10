import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B1120] px-6 text-white">

      <div className="text-center">

        <h1 className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-8xl font-bold text-transparent">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-bold">
          Page not found
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-400">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-8 py-4 font-medium transition duration-300 hover:scale-105"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}