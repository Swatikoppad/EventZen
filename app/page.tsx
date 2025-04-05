import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900 dark:bg-black dark:text-white">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md">
        <div className="text-xl font-bold">EventZen</div>
        <nav className="flex gap-6 text-sm">
          <Link href="#features" className="hover:text-blue-600">Features</Link>
          <Link href="#about" className="hover:text-blue-600">About</Link>
          <Link href="#contact" className="hover:text-blue-600">Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16 gap-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Simplify Your Event Planning
        </h1>
        <p className="max-w-xl text-gray-600 dark:text-gray-300 text-lg">
          EventZen helps you create, manage, and promote events effortlessly with real-time collaboration and a beautiful interface.
        </p>
        <div className="flex gap-4 mt-6">
          <Link
            href="#get-started"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium transition"
          >
            Get Started
          </Link>
          <Link
            href="#learn-more"
            className="border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-full text-sm font-medium transition"
          >
            Learn More
          </Link>
        </div>
        <Image
          src="/event.svg" // Replace with your own image
          alt="Event illustration"
          width={500}
          height={300}
          className="mt-10"
        />
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
        &copy; {new Date().getFullYear()} EventZen. All rights reserved.
      </footer>
    </div>
  );
}
