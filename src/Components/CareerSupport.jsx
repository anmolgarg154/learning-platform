import React, { useState } from "react";

function CareerSupport() {
  const [form, setform] = useState({
    FullName: "",
    Email: "",
    Phone: "",
    designation: "fresher",
    Role: "",

  })
  return (
    <div className="bg-gradient from-purple-300 to-yellow-50 min-h-screen px-6 lg:px-24 py-16">

      <h1 className="text-5xl font-extrabold text-purple-800 mb-8">
        Career Support 🚀
      </h1>

      <p className="text-lg text-gray-700 max-w-3xl mb-14">
        Our Career Support program is designed to help learners confidently
        transition from learning to employment with structured guidance,
        mentorship, and interview preparation.
      </p>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
        <Feature
          title="Resume Building"
          desc="ATS-friendly resumes tailored for developer and designer roles."
          img="https://img.freepik.com/free-vector/resume-concept-illustration_114360-260.jpg"
        />

        <Feature
          title="Mock Interviews"
          desc="Practice real interview questions with expert feedback."
          img="https://img.freepik.com/free-vector/interview-concept-illustration_114360-1648.jpg"
        />

        <Feature
          title="Portfolio Guidance"
          desc="Build strong projects and GitHub profiles that recruiters love."
          img="https://img.freepik.com/free-vector/portfolio-concept-illustration_114360-5148.jpg"
        />

        <Feature
          title="Job Referrals"
          desc="Access hiring partners and referral opportunities."
          img="https://img.freepik.com/free-vector/job-search-concept-illustration_114360-512.jpg"
        />

        <Feature
          title="Career Mentorship"
          desc="1:1 guidance from industry professionals."
          img="https://img.freepik.com/free-vector/mentorship-concept-illustration_114360-5305.jpg"
        />

        <Feature
          title="Placement Strategy"
          desc="Learn how to apply, follow up, and crack interviews efficiently."
          img="https://img.freepik.com/free-vector/business-strategy-concept-illustration_114360-5137.jpg"
        />
      </div>

      {/* Application Form */}
      <div className="flex justify-center gap-8">
        <div className="w-[50%] bg-grey-400 border-2 border-purple-500 rounded-xl p-6">
          <h2 className="text-3xl font-bold text-center mb-6">
            Our Open Positions
          </h2>

          <div className="space-y-5">
            {/* Position Card */}
            <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-800">
                Frontend Developer (React)
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Experience: 0–2 Years · Location: Remote
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">React</span>
                <span className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">Tailwind</span>
                <span className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">JavaScript</span>
              </div>
            </div>

            {/* Position Card */}
            <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-800">
                Backend Developer (Node.js)
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Experience: 1–3 Years · Location: Hybrid
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">Node.js</span>
                <span className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">Express</span>
                <span className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">MongoDB</span>
              </div>
            </div>

            {/* Position Card */}
            <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-800">
                UI/UX Designer
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Experience: Fresher · Location: Onsite
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">Figma</span>
                <span className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">Wireframing</span>
                <span className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">Prototyping</span>
              </div>
            </div>

            {/* Position Card */}
            <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-800">
                Data Analyst
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Experience: 0–2 Years · Location: Remote
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">SQL</span>
                <span className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">Excel</span>
                <span className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">Power BI</span>
              </div>
            </div>
          </div>
        </div>


        {/* ------------------------------------------------ */}


        <div className="bg-white w-[50%] max-w-2xl rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">
            Apply for Career Support
          </h2>

          <form className="space-y-5">
          
            <input
              type="text"
              id=""
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Select Designation</option>
              <option>Student</option>
              <option>Fresher</option>
              <option>Working Professional</option>
            </select>

          
            <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Select Role</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Full Stack Developer</option>
              <option>UI/UX Designer</option>
              <option>Data Analyst</option>
            </select>

            {/* Resume */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Upload Resume
              </label>
              <input
                type="file"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition"
            >
              Apply Now
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

const Feature = ({ title, desc, img }) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
    <img src={img} alt={title} className="h-40 mx-auto mb-6" />
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </div>
);

export default CareerSupport;
