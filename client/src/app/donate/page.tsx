"use client";

import axios from "axios";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

export default function DonatePage() {
  const router = useRouter();

  const [selectedAmount, setSelectedAmount] = useState(1000);

  useEffect(() => {
    const token = localStorage.getItem("futureforge_token");

    if (!token) {
      router.push("/login");
    }
  }, [router]);

  const amounts = [500, 1000, 3000, 5000];

  const handlePayment = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/payment/create-order`,
        {
          amount: selectedAmount,
        },
      );

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,

        currency: data.currency,

        name: "FutureForge",

        description: "Donation Payment",

        order_id: data.id,

        handler: function (response: any) {
          alert("Payment Successful 🎉");

          console.log(response);
        },

        theme: {
          color: "#06B6D4",
        },
      };

      const razorpay = new (window as any).Razorpay(options);

      razorpay.open();
    } catch (error) {
      console.log(error);

      alert("Payment failed");
    }
  };

  return (
    <main className="min-h-screen bg-[#0B1120] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Donate
          </p>

          <h1 className="text-5xl font-bold">Sponsor Someone’s Future</h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Your contribution helps learners gain access to mentorship,
            technology, coding education, and career opportunities.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left */}
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="text-2xl font-bold">Choose Donation Amount</h2>

            {/* Amounts */}
            <div className="mt-8 grid grid-cols-2 gap-5">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`rounded-3xl border p-6 text-left transition duration-300 ${
                    selectedAmount === amount
                      ? "border-cyan-400 bg-cyan-400 text-black"
                      : "border-white/10 bg-white/5 hover:border-cyan-400/30"
                  }`}
                >
                  <h3 className="text-4xl font-bold">₹{amount}</h3>

                  <p className="mt-3 text-sm opacity-80">
                    Sponsor opportunities for learners
                  </p>
                </button>
              ))}
            </div>

            {/* Monthly */}
            <div className="mt-10 flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-6">
              <div>
                <h3 className="text-xl font-semibold">Monthly Donation</h3>

                <p className="mt-2 text-gray-400">
                  Support learners every month
                </p>
              </div>

              <div className="h-10 w-20 rounded-full bg-white/10 p-1">
                <div className="h-8 w-8 rounded-full bg-white transition" />
              </div>
            </div>

            {/* Message */}
            <textarea
              placeholder="Write a message for learners..."
              className="mt-10 h-36 w-full rounded-3xl border border-white/10 bg-white/5 p-5 outline-none placeholder:text-gray-500"
            />

            {/* Donate Button */}
            <button
              onClick={handlePayment}
              className="mt-10 w-full rounded-3xl bg-gradient-to-r from-cyan-500 to-violet-500 py-5 text-lg font-semibold transition duration-300 hover:scale-[1.02]"
            >
              Donate ₹{selectedAmount}
            </button>
          </div>

          {/* Right */}
          <div className="rounded-[32px] bg-gradient-to-br from-cyan-500 to-violet-600 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-white/80">
              Impact Preview
            </p>

            <h2 className="mt-6 text-5xl font-bold leading-tight">
              ₹{selectedAmount} can help transform lives through education.
            </h2>

            {/* Benefits */}
            <div className="mt-10 space-y-6">
              {[
                "💻 Coding mentorship for students",
                "🎯 Interview preparation sessions",
                "🌍 Internet and learning access",
                "🚀 Career acceleration opportunities",
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl bg-white/10 p-6 backdrop-blur-md"
                >
                  <p className="text-lg font-medium">{item}</p>
                </div>
              ))}
            </div>

            {/* Transparency */}
            <div className="mt-12 rounded-3xl bg-black/20 p-8">
              <h3 className="text-3xl font-bold">Transparency Promise</h3>

              <p className="mt-5 text-lg leading-8 text-white/80">
                Every donation directly supports educational programs,
                mentorship, and skill development opportunities for learners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
