"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B1120] text-white">
      {/* Blur Effects */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl"></div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 py-16 text-center lg:flex-row lg:text-left"
      >
        {/* Left Side */}
        <div className="flex-1">
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur-xl">
            Empowering futures through technology
          </div>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
            Forging brighter futures through{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              skills and opportunity
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            FutureForge helps underprivileged students gain access to modern
            tech education, mentorship, and career opportunities through
            community-powered sponsorships.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/donate"
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-7 py-4 text-sm font-semibold transition duration-300 hover:scale-105"
            >
              Sponsor a Student
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/programs"
              className="rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold backdrop-blur-xl transition hover:bg-white/10"
            >
              Explore Programs
            </Link>
          </div>

          {/* Stats */}
          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div>
              <h2 className="text-3xl font-bold text-cyan-400">
                <CountUp end={12} duration={3} />
                K+
              </h2>

              <p className="mt-2 text-sm text-gray-400">Students Supported</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-violet-400">
                <CountUp end={85} duration={3} />%
              </h2>

              <p className="mt-2 text-sm text-gray-400">Placement Success</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-cyan-400">
                <CountUp end={320} duration={3} />+
              </h2>

              <p className="mt-2 text-sm text-gray-400">Mentors</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-violet-400">
                ₹<CountUp end={25} duration={3} />
                L+
              </h2>

              <p className="mt-2 text-sm text-gray-400">Funds Raised</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative mt-20 flex-1 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mx-auto max-w-md rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(139,92,246,0.2)] backdrop-blur-2xl"
          >
            <div className="rounded-3xl bg-gradient-to-br from-cyan-500 to-violet-600 p-8">
              <p className="text-sm text-white/80">
                Sponsored Learning Journey
              </p>

              <h2 className="mt-3 text-3xl font-bold">Women in Tech Program</h2>

              <div className="mt-8 rounded-2xl bg-white/10 p-5 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/70">
                    Funding Progress
                  </span>

                  <span className="text-sm font-semibold">78%</span>
                </div>

                <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/20">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "78%" }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="h-full rounded-full bg-white"
                  />
                </div>

                <div className="mt-5 flex items-center justify-between text-sm">
                  <p>240 learners supported</p>
                  <p>18 days left</p>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-8 -left-8 rounded-2xl border border-white/10 bg-[#111827]/90 p-5 shadow-xl backdrop-blur-xl"
            >
              <p className="text-sm text-gray-400">Donation Impact</p>

              <h3 className="mt-2 text-2xl font-bold">₹1000</h3>

              <p className="mt-1 text-sm text-cyan-300">
                Sponsors interview preparation for 1 student
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
