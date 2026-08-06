export default function Courses() {
  const courses = [
    "AWS",
    "DevOps",
    "Linux",
    "Docker",
    "Kubernetes",
    "Terraform",
  ];

  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Popular Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course}
              className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition"
            >
              <h3 className="text-2xl font-bold text-blue-400">
                {course}
              </h3>

              <p className="mt-3 text-gray-300">
                Learn {course} with practical examples and real-world projects.
              </p>

              <button className="mt-6 bg-blue-600 px-4 py-2 rounded-lg">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}