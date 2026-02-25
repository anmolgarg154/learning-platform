import React, { useEffect, useState } from "react";
import img1 from "../Components/Images/A1.png";

function Packs() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden font-sans text-gray-800">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid lg:grid-cols-2 gap-12 items-center">

        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Study Your Favourite Course
            <span className="ml-3 text-sm bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full font-semibold align-middle">
              FREE
            </span>
          </h1>

          <ul className="space-y-3 text-lg text-gray-600">
            <li>📚 Build Career With Us</li>
            <li>🚀 Learn From Industry Experts</li>
            <li>🎓 Get Certified</li>
            <li>👨‍🏫 Personalized Guidance</li>
            <li>📈 Real Industry Projects</li>
          </ul>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold shadow-md transition">
            Explore Courses
          </button>
        </div>

        <div>
          <img
            src={img1}
            alt="Course"
            className="rounded-3xl shadow-2xl w-full object-cover"
          />
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-8">

        <PricingCard price="₹1,499" highlight="bg-indigo-500" />
        <PricingCard price="₹3,999" highlight="bg-pink-500" />

      </section>

      {/* HOW TO ENROLL */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-16">
        <h2 className="text-4xl lg:text-5xl font-extrabold">
          How to Enroll
        </h2>
      </section>

      {/* LEARN FOR FREE */}
      <section className="bg-gray-900 text-white py-20 px-6 lg:px-16">
        <h2 className="text-center text-4xl lg:text-5xl font-extrabold mb-16">
          Here's how you will{" "}
          <span className="text-pink-400">learn for Free</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* STEPS */}
          <div className="space-y-8">

            <StepCard
              title="Enroll"
              desc="Pay ₹699 and start your journey."
              icon="https://cdn-icons-png.flaticon.com/512/891/891462.png"
            />

            {/* Progress Step */}
            <div className="bg-white text-black rounded-2xl p-6 flex items-center gap-6 shadow-lg">
              <div className="relative w-16 h-16">
                <svg className="w-full h-full">
                  <circle cx="32" cy="32" r="28" stroke="#E5E7EB" strokeWidth="6" fill="none" />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#6366F1"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 28}
                    strokeDashoffset={
                      2 * Math.PI * 28 -
                      (progress / 100) * 2 * Math.PI * 28
                    }
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center font-bold text-indigo-600">
                  {progress}%
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-indigo-600">
                  Complete Course
                </h3>
                <p className="text-gray-600">
                  Finish lectures & assignments.
                </p>
              </div>
            </div>

            <StepCard
              title="Get 100% Refund"
              desc="Receive full amount back in your bank."
              icon="https://cdn-icons-png.flaticon.com/512/1040/1040230.png"
            />
          </div>

          {/* RIGHT INFO */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-10 shadow-2xl space-y-6">
            <h3 className="text-3xl font-bold">Course Duration</h3>
            <ul className="space-y-4 text-lg">
              <li>✅ Lifetime course access</li>
              <li>✅ Complete within 3 months for refund</li>
            </ul>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 lg:px-24 bg-gray-50">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-16">
          Why Choose Us? 🌟
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          <Card
            title="Industry-Focused"
            desc="Designed as per real job roles."
          />
          <Card
            title="Hands-On Learning"
            desc="Build real projects."
          />
          <Card
            title="Beginner Friendly"
            desc="Structured for all backgrounds."
          />
          <Card
            title="Career Support"
            desc="Mentorship & interview prep."
          />
        </div>
      </section>

    </div>
  );
}

/* COMPONENTS */

const PricingCard = ({ price, highlight }) => (
  <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:scale-105 transition duration-300">
    <h3 className="text-2xl font-bold mb-4">Customized Course Pack</h3>
    <p className="text-gray-500 mb-6">Choose any 4+ Courses</p>
    <h1 className="text-4xl font-extrabold mb-4">{price}</h1>
    <p className="text-gray-600 mb-6">100% Refund within 1 year</p>
    <button className={`${highlight} text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition`}>
      Enroll Now
    </button>
  </div>
);

const StepCard = ({ title, desc, icon }) => (
  <div className="bg-white text-black rounded-2xl p-6 flex items-center gap-6 shadow-lg">
    <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center">
      <img src={icon} alt={title} className="w-8 h-8" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-indigo-600">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  </div>
);

const Card = ({ title, desc }) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </div>
);

export default Packs;