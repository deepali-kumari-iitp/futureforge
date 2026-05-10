import { notFound } from "next/navigation";

const programs = {
  "women-in-tech": {
    title: "Women in Tech Initiative",
    category: "Technology Program",
    description:
      "Helping women from underserved communities gain access to coding education, mentorship, and career opportunities.",
    students: "240+",
    progress: "78%",
    color: "from-cyan-500 to-violet-600",
    curriculum: [
      "Frontend Development",
      "React & Next.js",
      "Interview Preparation",
      "Career Mentorship",
    ],
  },

  "ai-learning-program": {
    title: "AI Learning Program",
    category: "Artificial Intelligence",
    description:
      "Providing learners access to AI, machine learning, and project-based learning experiences.",
    students: "180+",
    progress: "64%",
    color: "from-violet-500 to-purple-600",
    curriculum: [
      "Python Basics",
      "Machine Learning",
      "Deep Learning",
      "AI Projects",
    ],
  },

  "rural-coding-bootcamp": {
    title: "Rural Coding Bootcamp",
    category: "Coding Program",
    description:
      "Empowering rural students with digital literacy and modern web development skills.",
    students: "310+",
    progress: "82%",
    color: "from-emerald-500 to-teal-600",
    curriculum: [
      "HTML & CSS",
      "JavaScript",
      "React",
      "Freelancing Skills",
    ],
  },

  "career-accelerator": {
    title: "Career Accelerator",
    category: "Career Program",
    description:
      "Helping learners prepare for interviews, resume building, and placements.",
    students: "150+",
    progress: "71%",
    color: "from-orange-500 to-pink-600",
    curriculum: [
      "Resume Building",
      "Interview Preparation",
      "LinkedIn Optimization",
      "Mock Interviews",
    ],
  },
};

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const program =
    programs[slug as keyof typeof programs];

  if (!program) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0B1120] px-6 py-20 text-white">

      <div className="mx-auto max-w-7xl">

        {/* Hero */}
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left */}
          <div>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              {program.category}
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight">
              {program.title}
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-400">
              {program.description}
            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

                <h2 className="text-4xl font-bold text-cyan-400">
                  {program.students}
                </h2>

                <p className="mt-3 text-gray-400">
                  Students Supported
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

                <h2 className="text-4xl font-bold text-violet-400">
                  {program.progress}
                </h2>

                <p className="mt-3 text-gray-400">
                  Funding Progress
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div
            className={`rounded-[36px] bg-gradient-to-br ${program.color} p-10`}
          >

            <h2 className="text-3xl font-bold">
              Program Impact
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/90">
              This initiative provides mentorship, project-based learning,
              resume building, and career guidance for aspiring learners.
            </p>

            {/* Progress */}
            <div className="mt-10">

              <div className="flex items-center justify-between text-sm">

                <span>Funding Progress</span>

                <span>{program.progress}</span>
              </div>

              <div className="mt-4 h-4 overflow-hidden rounded-full bg-white/20">

                <div
                  style={{ width: program.progress }}
                  className="h-full rounded-full bg-white"
                />
              </div>
            </div>

            {/* Button */}
            <button className="mt-10 w-full rounded-2xl bg-white py-4 font-semibold text-black transition duration-300 hover:scale-[1.02]">
              Support This Program
            </button>
          </div>
        </div>

        {/* Curriculum */}
        <div className="mt-32">

          <div className="text-center">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-violet-400">
              Curriculum
            </p>

            <h2 className="text-5xl font-bold">
              What learners will gain
            </h2>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {program.curriculum.map((item, index) => (
              <div
                key={index}
                className="rounded-[30px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
              >

                <h3 className="text-xl font-semibold">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}