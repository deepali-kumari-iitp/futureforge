"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";

const programs = [
  {
    title: "Women in Tech",
    slug: "women-in-tech",
    image: "/images/women-tech.jpg",
    description:
      "Helping women from underserved communities build careers in technology.",
    progress: "78%",
    students: "240 Students",
    category: "Technology",
    color: "from-cyan-500 to-blue-500",
  },

  {
    title: "AI Learning Program",
    slug: "ai-learning-program",
    image: "/images/ai-learning.jpg",
    description:
      "Providing AI and machine learning education to aspiring innovators.",
    progress: "64%",
    students: "180 Students",
    category: "Artificial Intelligence",
    color: "from-violet-500 to-purple-500",
  },

  {
    title: "Rural Coding Bootcamp",
    slug: "rural-coding-bootcamp",
    image: "/images/rural-coding.jpg",
    description:
      "Empowering rural students with coding and digital literacy skills.",
    progress: "82%",
    students: "310 Students",
    category: "Coding",
    color: "from-emerald-500 to-teal-500",
  },

  {
    title: "Career Accelerator",
    slug: "career-accelerator",
    image: "/images/career.jpg",
    description:
      "Helping students prepare for placements and interview opportunities.",
    progress: "71%",
    students: "150 Students",
    category: "Career",
    color: "from-orange-500 to-pink-500",
  },
];

const filters = [
  "All",
  "Technology",
  "Coding",
  "Career",
  "Artificial Intelligence",
];

export default function ProgramsPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredPrograms = programs.filter((program) => {
    const matchesSearch = program.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      activeFilter === "All" ||
      program.category
        .toLowerCase()
        .includes(activeFilter.toLowerCase());

    return matchesSearch && matchesFilter;
  });

  return (
    <main className="min-h-screen bg-[#0B1120] px-6 py-20 text-white">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Programs
          </p>

          <h1 className="text-5xl font-bold">
            Explore Impactful Learning Programs
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Support skill development initiatives helping students gain access
            to mentorship, technology, and career opportunities.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="mt-14 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          {/* Search */}
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl lg:w-[400px]">

            <Search size={20} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search programs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent outline-none placeholder:text-gray-500"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4">

            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-5 py-3 text-sm transition ${
                  activeFilter === filter
                    ? "border-cyan-400 bg-cyan-400 text-black"
                    : "border-white/10 bg-white/5 hover:bg-white hover:text-black"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        {filteredPrograms.length > 0 ? (

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {filteredPrograms.map((program, index) => (
              <Link
                key={index}
                href={`/programs/${program.slug}`}
              >

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:border-cyan-400/30"
                >

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">

                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/30" />
                  </div>

                  {/* Content */}
                  <div className="p-6">

                    <div className="flex items-center justify-between">

                      <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs text-cyan-300">
                        {program.category}
                      </span>

                      <span className="text-sm text-gray-400">
                        {program.students}
                      </span>
                    </div>

                    <h2 className="mt-5 text-2xl font-semibold">
                      {program.title}
                    </h2>

                    <p className="mt-4 leading-7 text-gray-400">
                      {program.description}
                    </p>

                    {/* Progress */}
                    <div className="mt-8">

                      <div className="flex items-center justify-between text-sm">

                        <span className="text-gray-400">
                          Funding Progress
                        </span>

                        <span>
                          {program.progress}
                        </span>
                      </div>

                      <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/10">

                        <div
                          style={{ width: program.progress }}
                          className={`h-full rounded-full bg-gradient-to-r ${program.color}`}
                        />
                      </div>
                    </div>

                    {/* Button */}
                    <button className="mt-8 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 py-4 font-medium transition duration-300 hover:scale-[1.02]">
                      Support Program
                    </button>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

        ) : (

          <div className="mt-24 rounded-[32px] border border-white/10 bg-white/5 p-16 text-center backdrop-blur-xl">

            <h2 className="text-3xl font-bold">
              No programs found
            </h2>

            <p className="mt-4 text-gray-400">
              Try searching with different keywords or filters.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setActiveFilter("All");
              }}
              className="mt-8 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-8 py-4 font-medium transition duration-300 hover:scale-105"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}