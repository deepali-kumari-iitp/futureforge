import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B1120] px-6 py-16 text-white">

      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">

        {/* Brand */}
        <div>

          <h2 className="text-3xl font-bold">
            FutureForge
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            Empowering learners through technology,
            mentorship, and career opportunities.
          </p>
        </div>

        {/* Platform */}
        <div>

          <h3 className="text-lg font-semibold">
            Platform
          </h3>

          <div className="mt-5 flex flex-col gap-4 text-gray-400">

            <Link
              href="/programs"
              className="transition hover:text-cyan-400"
            >
              Programs
            </Link>

            <Link
              href="/donate"
              className="transition hover:text-cyan-400"
            >
              Donate
            </Link>

            <Link
              href="/impact"
              className="transition hover:text-cyan-400"
            >
              Impact
            </Link>
          </div>
        </div>

        {/* Company */}
        <div>

          <h3 className="text-lg font-semibold">
            Company
          </h3>

          <div className="mt-5 flex flex-col gap-4 text-gray-400">

            <a
              href="#"
              className="transition hover:text-cyan-400"
            >
              About
            </a>

            <a
              href="#"
              className="transition hover:text-cyan-400"
            >
              Contact
            </a>

            <a
              href="#"
              className="transition hover:text-cyan-400"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Connect */}
        <div>

          <h3 className="text-lg font-semibold">
            Connect
          </h3>

          <div className="mt-6 flex flex-wrap gap-3">

            <a
              href="#"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-xl transition duration-300 hover:border-cyan-400/40 hover:text-cyan-400"
            >
              Instagram
            </a>

            <a
              href="#"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-xl transition duration-300 hover:border-cyan-400/40 hover:text-cyan-400"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-xl transition duration-300 hover:border-cyan-400/40 hover:text-cyan-400"
            >
              GitHub
            </a>

            <a
              href="#"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-xl transition duration-300 hover:border-cyan-400/40 hover:text-cyan-400"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto mt-16 max-w-7xl border-t border-white/10 pt-8 text-center text-sm text-gray-500">

        © 2026 FutureForge. All rights reserved.
      </div>
    </footer>
  );
}