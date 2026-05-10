"use client";

import axios from "axios";

import { motion } from "framer-motion";

import CountUp from "react-countup";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  const [donations, setDonations] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("futureforge_token");

    if (!token) {
      router.push("/login");

      return;
    }

    const fetchDonations = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/donations");

        setDonations(res.data.donations);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDonations();
  }, [router]);

  const totalRaised = donations.reduce(
    (acc, donation) => acc + donation.amount,
    0,
  );

  return (
    <main className="min-h-screen bg-[#0B1120] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
              Dashboard
            </p>

            <h1 className="text-5xl font-bold">FutureForge Analytics</h1>
          </div>

        
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              label: "Total Donations",
              value: totalRaised,
              prefix: "₹",
            },

            {
              label: "Students Supported",
              value: donations.length * 12,
              suffix: "+",
            },

            {
              label: "Mentors",
              value: 320,
              suffix: "+",
            },

            {
              label: "Success Rate",
              value: 85,
              suffix: "%",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <p className="text-gray-400">{stat.label}</p>

              <h2 className="mt-6 text-5xl font-bold text-cyan-400">
                {stat.prefix}

                <CountUp end={stat.value} duration={3} />

                {stat.suffix}
              </h2>
            </motion.div>
          ))}
        </div>

        {/* Recent Donations */}
        <div className="mt-24 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Recent Donations</h2>

            <p className="text-gray-400">Live contribution activity</p>
          </div>

          <div className="mt-10 space-y-5">
            {donations.length > 0 ? (
              donations.map((donation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-5"
                >
                  <div>
                    <h3 className="font-semibold">Anonymous Donor</h3>

                    <p className="mt-1 text-sm text-gray-400">
                      Donated to FutureForge
                    </p>
                  </div>

                  <div className="text-xl font-bold text-cyan-400">
                    ₹{donation.amount}
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-center text-gray-400">
                No donations yet.
              </div>
            )}
          </div>
        </div>

        {/* Growth Section */}
        <div className="mt-24 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-500 to-violet-600 p-10"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-white/80">
              Growth
            </p>

            <h2 className="mt-6 text-4xl font-bold leading-tight">
              Donation engagement is continuously growing.
            </h2>

            <p className="mt-6 leading-8 text-white/80">
              More learners are gaining access to mentorship, coding education,
              and career opportunities through community support.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >
            <h2 className="text-3xl font-bold">Platform Highlights</h2>

            <div className="mt-10 space-y-6">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                🚀 Full-stack donation platform
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                📚 Learning & mentorship ecosystem
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                🌍 Real community impact
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                💡 Modern scalable architecture
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
