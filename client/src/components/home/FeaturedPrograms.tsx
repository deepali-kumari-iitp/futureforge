"use client";

import { motion } from "framer-motion";

const programs = [
  {
    title: "Women in Tech",

    description:
      "Helping women from underserved communities build careers in technology.",

    progress: "78%",

    students: "240 Students",

    color: "from-cyan-500 to-blue-500",

    image: "/images/women-tech.jpg",
  },

  {
    title: "AI Learning Program",

    description:
      "Providing AI and machine learning education to aspiring innovators.",

    progress: "64%",

    students: "180 Students",

    color: "from-violet-500 to-purple-500",

    image: "/images/ai-learning.jpg",
  },

  {
    title: "Rural Coding Bootcamp",

    description:
      "Empowering rural students with coding and digital literacy skills.",

    progress: "82%",

    students: "310 Students",

    color: "from-emerald-500 to-teal-500",

    image: "/images/rural-coding.jpg",
  },
];

export default function FeaturedPrograms() {

  return (
    <section className="bg-[#0B1120] px-6 py-28 text-white">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 text-center">

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Featured Programs
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Support programs changing lives
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Every contribution helps learners gain access to mentorship,
            technology, and career opportunities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {programs.map((program, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:border-cyan-400/30"
            >

              {/* Image */}
              <div className="overflow-hidden rounded-3xl">

                <img
                  src={program.image}
                  alt={program.title}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="mt-6">

                <h3 className="text-2xl font-semibold">
                  {program.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {program.description}
                </p>

                {/* Progress */}
                <div className="mt-8">

                  <div className="flex items-center justify-between text-sm">

                    <span className="text-gray-400">
                      Funding Progress
                    </span>

                    <span className="font-medium">
                      {program.progress}
                    </span>
                  </div>

                  <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/10">

                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${program.color}`}
                      style={{
                        width: program.progress,
                      }}
                    />
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-8 flex items-center justify-between">

                  <p className="text-sm text-gray-400">
                    {program.students}
                  </p>

                  <button className="rounded-full border border-white/10 px-5 py-2 text-sm transition hover:bg-white hover:text-black">
                    Donate
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}