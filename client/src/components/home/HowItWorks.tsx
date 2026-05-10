"use client";

import { motion } from "framer-motion";
import { BookOpen, Briefcase, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    title: "Learn Modern Skills",
    description:
      "Students gain access to industry-ready courses, mentorship, and technology resources.",
  },

  {
    icon: HeartHandshake,
    title: "Community Sponsorship",
    description:
      "Donors directly support learners through skill development and career programs.",
  },

  {
    icon: Briefcase,
    title: "Career Opportunities",
    description:
      "Learners build portfolios, prepare for interviews, and unlock job opportunities.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#0B1120] px-6 py-28 text-white">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
            How It Works
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Transforming potential into opportunity
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            FutureForge connects donors and learners through a transparent,
            skill-focused journey designed to create long-term impact.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500">

                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}