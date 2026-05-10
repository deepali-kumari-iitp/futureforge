"use client";

import Link from "next/link";

import { Menu, X } from "lucide-react";

import { useEffect, useState } from "react";

import { useRouter, usePathname } from "next/navigation";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("futureforge_token");

    setIsLoggedIn(!!token);
  }, [pathname]);
  const handleLogout = () => {
    localStorage.removeItem("futureforge_token");

    setIsLoggedIn(false);

    router.push("/login");
    router.refresh();
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1120]/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide text-white">
          FutureForge
        </Link>

        {/* Right Side */}
        <div className="hidden items-center gap-6 md:flex">
          {/* Desktop Menu */}
          <div className="flex items-center gap-8 text-sm text-gray-300">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>

            <Link href="/programs" className="transition hover:text-white">
              Programs
            </Link>

            <Link href="/impact" className="transition hover:text-white">
              Impact
            </Link>

            <Link href="/donate" className="transition hover:text-white">
              Donate
            </Link>

            {isLoggedIn && (
              <Link href="/dashboard" className="transition hover:text-white">
                Dashboard
              </Link>
            )}
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Auth */}
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="rounded-full bg-gradient-to-r from-red-500 to-pink-500 px-5 py-2 text-sm font-medium text-white transition duration-300 hover:scale-105"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  className="rounded-full border border-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-2 text-sm font-medium text-white transition duration-300 hover:scale-105"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#0B1120] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5 text-gray-300">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>

            <Link href="/programs" className="transition hover:text-white">
              Programs
            </Link>

            <Link href="/impact" className="transition hover:text-white">
              Impact
            </Link>

            <Link href="/donate" className="transition hover:text-white">
              Donate
            </Link>

            {isLoggedIn && (
              <Link href="/dashboard" className="transition hover:text-white">
                Dashboard
              </Link>
            )}

            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="rounded-full bg-gradient-to-r from-red-500 to-pink-500 px-5 py-3 text-white"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  className="rounded-full border border-white/10 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-white hover:text-black"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-center text-sm font-medium text-white"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
