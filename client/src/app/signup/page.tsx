"use client";

import axios from "axios";

import { useRouter } from "next/navigation";

import { useState } from "react";

export default function SignupPage() {

  const router = useRouter();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSignup = async () => {
    try {

      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          name,
          email,
          password,
        }
      );

      localStorage.setItem(
        "futureforge_token",
        res.data.token
      );

      router.push("/dashboard");

    } catch (error) {

      console.log(error);

      alert("Signup failed");
    } finally {

      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B1120] px-6 text-white">

      <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Signup
        </p>

        <h1 className="text-4xl font-bold">
          Create Account
        </h1>

        {/* Inputs */}
        <div className="mt-10 space-y-5">

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none placeholder:text-gray-500"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none placeholder:text-gray-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none placeholder:text-gray-500"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleSignup}
          className="mt-8 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 py-4 font-semibold transition hover:scale-[1.02]"
        >

          {loading
            ? "Creating Account..."
            : "Signup"}
        </button>
      </div>
    </main>
  );
}