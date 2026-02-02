import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="bg-gradient from-purple-300 to-yellow-50">

      {/* HERO SECTION */}
      <section className="py-20 px-6 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT */}
          <div>
            <h1 className="text-5xl font-extrabold text-purple-800 mb-6">
              Empowering Learners to Build a Better Future 🚀
            </h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We are a modern learning platform focused on helping students,
              freshers, and professionals gain real-world skills through
              industry-relevant courses, hands-on projects, and expert-led
              guidance.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you want to become a frontend developer, full-stack
              engineer, UI/UX designer, or backend expert — we provide a clear
              and practical learning path.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://img.freepik.com/free-vector/online-learning-concept-illustration_114360-4764.jpg"
              alt="Learning Illustration"
              className="w-full max-w-lg drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="bg-white py-20 px-6 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://img.freepik.com/free-vector/mission-concept-illustration_114360-5325.jpg"
            alt="Mission"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-4xl font-bold text-purple-700 mb-6">
              Our Mission 🎯
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our mission is to bridge the gap between traditional education and
              industry expectations by providing practical, project-based
              learning.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We focus on clarity, consistency, and confidence — ensuring that
              every learner understands not just <b>what</b> to do, but
              <b> why</b> they are doing it.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 lg:px-24">
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-16">
          Why Choose Us? 🌟
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <Card
            title="Industry-Focused Courses"
            desc="Courses designed based on real industry requirements and job roles."
            img="https://img.freepik.com/free-vector/business-idea-concept-illustration_114360-5324.jpg"
          />

          <Card
            title="Hands-On Learning"
            desc="Learn by building real projects, not just watching videos."
            img="https://img.freepik.com/free-vector/project-management-concept-illustration_114360-5925.jpg"
          />

          <Card
            title="Beginner Friendly"
            desc="Structured content suitable for IT & non-IT backgrounds."
            img="https://img.freepik.com/free-vector/learning-concept-illustration_114360-3894.jpg"
          />

          <Card
            title="Career Support"
            desc="Guidance, mentorship, and interview-focused preparation."
            img="https://tse1.mm.bing.net/th/id/OIP.Qjf1U8ceQPAbWRz34Fna3wHaE4?pid=Api&P=0&h=180"
          />
        </div>
      </section>

      {/* OUR COURSES */}
      <section className="bg-white py-20 px-6 lg:px-24">
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-12">
          What You Can Learn With Us 📚
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <CourseCard title="React Development" />
          <CourseCard title="Angular Development" />
          <CourseCard title="Next.js Development" />
          <CourseCard title="MERN Stack Web Development" />
          <CourseCard title="UI / UX Designing" />
          <CourseCard title="Node.js Backend Development" />
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 px-6 lg:px-24 text-center">
        <h2 className="text-4xl font-bold text-purple-800 mb-6">
          Start Your Learning Journey Today 💡
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Join thousands of learners who are upgrading their skills and building
          successful careers with us.
        </p>
        <Link to="/courses" className="px-10 py-4 bg-purple-700 text-white text-lg font-bold rounded-xl hover:bg-purple-800 transition">
          Explore Courses
        </Link>
      </section>

    </div>
  );
}

/* Reusable Components */

const Card = ({ title, desc, img }) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 transition">
    <img src={img} alt={title} className="h-40 mx-auto mb-6" />
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </div>
);

const CourseCard = ({ title }) => (
  <div className="border border-purple-200 rounded-xl p-6 text-center bg-purple-50">
    <h3 className="text-xl font-semibold text-purple-800">{title}</h3>
  </div>
);

export default AboutUs;
