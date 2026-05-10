"use client";

import { motion } from "framer-motion";

const stories = [
  {
    name: "Ananya Sharma",
    role: "Frontend Developer Intern",
    story:
      "FutureForge helped me access coding mentorship and interview preparation. I landed my first internship after 6 months of learning.",
  },

  {
    name: "Rahul Kumar",
    role: "AI/ML Student",
    story:
      "Through sponsored AI courses and community mentorship, I built projects that helped me gain confidence and technical skills.",
  },
];

export default function SuccessStories() {
  return (
    <section className="bg-[#0B1120] px-6 py-28 text-white">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Success Stories
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Real learners. Real transformation.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Every learner supported through FutureForge represents a future
            transformed through skills, mentorship, and opportunity.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              {/* Profile */}
              <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-xl font-bold">
                  {story.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    {story.name}
                  </h3>

                  <p className="text-sm text-cyan-300">
                    {story.role}
                  </p>
                </div>
              </div>

              {/* Story */}
              <p className="mt-8 text-lg leading-8 text-gray-300">
                “{story.story}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}