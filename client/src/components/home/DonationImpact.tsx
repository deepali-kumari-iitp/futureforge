"use client";

import { motion } from "framer-motion";

const impacts = [
  {
    amount: "₹500",
    impact: "Provides internet access for one learner.",
  },

  {
    amount: "₹1000",
    impact: "Sponsors interview preparation for one student.",
  },

  {
    amount: "₹3000",
    impact: "Supports full access to a coding bootcamp.",
  },

  {
    amount: "₹5000",
    impact: "Helps provide mentorship and career guidance.",
  },
];

export default function DonationImpact() {
  return (
    <section className="bg-[#0B1120] px-6 py-28 text-white">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
            Donation Impact
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Small contributions create powerful outcomes
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Every donation directly supports skill development, mentorship,
            technology access, and career opportunities.
          </p>
        </div>

        {/* Impact Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {impacts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group rounded-[30px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-400/30"
            >

              <h3 className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-4xl font-bold text-transparent">
                {item.amount}
              </h3>

              <p className="mt-6 leading-7 text-gray-300">
                {item.impact}
              </p>

              <button className="mt-8 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-sm font-medium transition duration-300 hover:scale-105">
                Donate Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}