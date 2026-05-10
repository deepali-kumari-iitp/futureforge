"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const timeline = [
  {
    year: "2023",
    title: "FutureForge Founded",
    description:
      "Started with the mission to make technology education accessible.",
  },

  {
    year: "2024",
    title: "1000+ Learners Supported",
    description:
      "Expanded programs across coding, AI, and mentorship initiatives.",
  },

  {
    year: "2025",
    title: "Partnership Expansion",
    description:
      "Collaborated with mentors, educators, and nonprofit communities.",
  },

  {
    year: "2026",
    title: "Career Acceleration",
    description:
      "Helping learners secure internships and technology opportunities.",
  },
];

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] px-6 py-20 text-white">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Impact
          </p>

          <h1 className="text-5xl font-bold">
            Building Futures Through Skills
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            FutureForge is committed to creating measurable impact
            through education, mentorship, and technology access.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {[
            {
              value: 12000,
              suffix: "+",
              label: "Students Supported",
            },

            {
              value: 85,
              suffix: "%",
              label: "Placement Success",
            },

            {
              value: 320,
              suffix: "+",
              label: "Mentors",
            },

            {
              value: 25,
              suffix: "L+",
              label: "Funds Raised",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-[30px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
            >

              <h2 className="text-5xl font-bold text-cyan-400">

                <CountUp
                  end={stat.value}
                  duration={3}
                />

                {stat.suffix}
              </h2>

              <p className="mt-4 text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-32">

          <div className="text-center">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-violet-400">
              Journey
            </p>

            <h2 className="text-5xl font-bold">
              Our Growth Timeline
            </h2>
          </div>

          <div className="mt-20 space-y-8">

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >

                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                  <div>

                    <p className="text-cyan-400">
                      {item.year}
                    </p>

                    <h3 className="mt-2 text-3xl font-bold">
                      {item.title}
                    </h3>
                  </div>

                  <p className="max-w-2xl leading-8 text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="mt-32">

          <div className="text-center">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
              Community
            </p>

            <h2 className="text-5xl font-bold">
              Trusted By Learners & Mentors
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {[
              "Tech Mentors",
              "NGO Partners",
              "Startup Communities",
              "Career Coaches",
            ].map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-center text-lg font-semibold backdrop-blur-xl"
              >

                {partner}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}