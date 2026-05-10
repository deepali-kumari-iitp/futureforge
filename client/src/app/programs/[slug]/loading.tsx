export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0B1120] px-6 py-20 text-white">

      <div className="mx-auto max-w-7xl animate-pulse">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left */}
          <div>

            <div className="h-10 w-40 rounded-full bg-white/10" />

            <div className="mt-8 h-20 w-full rounded-3xl bg-white/10" />

            <div className="mt-8 space-y-4">

              <div className="h-4 w-full rounded-full bg-white/10" />

              <div className="h-4 w-[90%] rounded-full bg-white/10" />

              <div className="h-4 w-[70%] rounded-full bg-white/10" />
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">

              <div className="h-40 rounded-3xl bg-white/10" />

              <div className="h-40 rounded-3xl bg-white/10" />
            </div>
          </div>

          {/* Right */}
          <div className="h-[450px] rounded-[36px] bg-white/10" />
        </div>

        {/* Curriculum */}
        <div className="mt-32">

          <div className="mx-auto h-14 w-[300px] rounded-3xl bg-white/10" />

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-40 rounded-[30px] bg-white/10"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
