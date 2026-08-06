import About from "@/components/About";
import Courses from "@/components/Courses";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-blue-400">
          Technical Gyan Tutorial
        </h1>

        <div className="space-x-6">
          <a href="#">Home</a>
          <a href="#">Roadmaps</a>
          <a href="#">Blogs</a>
          <a href="#">YouTube</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-6xl font-bold leading-tight">
            Build Your{" "}
            <span className="text-blue-400">
              AWS & DevOps
            </span>{" "}
            Career
          </h2>

          <p className="mt-6 text-xl text-gray-300">
            Learn AWS, Linux, Docker, Kubernetes, Terraform, Git,
            Jenkins and DevOps from Beginner to Advanced.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="bg-blue-600 px-8 py-4 rounded-lg">
              Start Learning
            </button>

            <button className="border border-white px-8 py-4 rounded-lg">
              View Roadmaps
            </button>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-slate-800 rounded-3xl p-8 shadow-xl">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="rounded-xl w-full"
          />

          <h3 className="text-3xl font-bold mt-6">
            Rakesh Maurya
          </h3>

          <p className="text-gray-400 mt-3">
            DevOps Engineer | AWS Learner | YouTube Creator
          </p>
        </div>

      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-slate-800 p-8 rounded-xl text-center">
            <h2 className="text-4xl font-bold text-blue-400">100+</h2>
            <p>AWS Tutorials</p>
          </div>

          <div className="bg-slate-800 p-8 rounded-xl text-center">
            <h2 className="text-4xl font-bold text-blue-400">50+</h2>
            <p>DevOps Projects</p>
          </div>

          <div className="bg-slate-800 p-8 rounded-xl text-center">
            <h2 className="text-4xl font-bold text-blue-400">1000+</h2>
            <p>Students</p>
          </div>

          <div className="bg-slate-800 p-8 rounded-xl text-center">
            <h2 className="text-4xl font-bold text-blue-400">24×7</h2>
            <p>Learning Support</p>
          </div>

        </div>
      </section>

      <About />
      <Courses />
      <WhyChoose />

    </main>
  );
}