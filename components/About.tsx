export default function About() {
  return (
    <section className="bg-slate-900 text-white py-20 px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-400 mb-6">
          About Me
        </h2>

        <p className="text-lg leading-8 text-gray-300">
          Hello! I'm Rakesh Maurya, a DevOps Engineer and AWS learner.
          I create tutorials on AWS, Linux, Docker, Kubernetes,
          Terraform and DevOps to help beginners build a successful IT career.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-3xl font-bold text-blue-400">50+</h3>
            <p>Tutorials</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-3xl font-bold text-blue-400">1000+</h3>
            <p>Students</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-3xl font-bold text-blue-400">AWS</h3>
            <p>Cloud</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-3xl font-bold text-blue-400">DevOps</h3>
            <p>Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}