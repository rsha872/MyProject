export default function WhyChoose() {
  return (
    <section className="bg-slate-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Why Choose Technical Gyan Tutorial?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-2xl font-bold">📘 Easy Learning</h3>
            <p className="mt-3">
              Step-by-step AWS and DevOps tutorials for beginners.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-2xl font-bold">💻 Practical Projects</h3>
            <p className="mt-3">
              Build real-world DevOps and Cloud projects.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-2xl font-bold">🎯 Interview Preparation</h3>
            <p className="mt-3">
              Learn interview questions with practical answers.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}