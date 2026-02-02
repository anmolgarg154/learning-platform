import React from "react";
import {
  UserIcon,
  StarIcon,
  UsersIcon,
  CreditCardIcon,
  ClockIcon,
  LanguageIcon,
  PlayCircleIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

function Single({ courseTitle }) {
  return (
    <div className="bg-gradient-to-br from-purple-300 to-yellow-50 mt-8 rounded-xl shadow-lg p-4 md:p-10 mx-2 md:mx-4">

      {/* HERO SECTION */}
      <div className="w-full min-h-[auto] md:h-[500px] flex items-center justify-center px-2 md:px-4">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <h2 className="text-3xl md:text-6xl font-extrabold leading-tight">
              <span className="text-purple-700">Learn {courseTitle}</span>, <br />
              Effectively for{" "}
              <span className="text-black underline decoration-yellow-400">
                Free
              </span>
            </h2>

            <p className="text-lg md:text-2xl font-semibold text-gray-700">
              Get <span className="text-purple-700">100% of your money back</span>{" "}
              after successful course completion.
            </p>

            <button className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 bg-purple-700 text-white text-lg md:text-xl font-bold rounded-xl shadow-lg hover:bg-purple-800 hover:scale-105 transition-all duration-300">
              Start Learning Now 🚀
            </button>
          </div>

          {/* RIGHT VIDEO */}
          <div className="bg-yellow-400 rounded-2xl shadow-xl p-3 md:p-4 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/N5LkiQ4_nT0"
                title="React Course"
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="w-full py-6 md:py-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Our Courses Features
        </h2>

        <div className="max-w-7xl mx-auto border border-gray-300 rounded-2xl bg-white p-4 md:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 md:gap-y-12 gap-x-6 md:gap-x-8">

            <Feature icon={<UserIcon className="w-6 h-6" />} title="Anyone" desc="Can learn (IT / Non-IT)" />
            <Feature icon={<StarIcon className="w-6 h-6" />} title="4.8+" desc="Course Rating" />
            <Feature icon={<UsersIcon className="w-6 h-6" />} title="90000+" desc="Learners" />
            <Feature icon={<ArrowPathIcon className="w-6 h-6" />} title="Lifetime" desc="Course Access" />
            <Feature icon={<CreditCardIcon className="w-6 h-6" />} title="One Time" desc="Payment" />
            <Feature icon={<ClockIcon className="w-6 h-6" />} title="16+ Hours" desc="Content Duration" />
            <Feature icon={<LanguageIcon className="w-6 h-6" />} title="Simple English" desc="Language" />
            <Feature icon={<PlayCircleIcon className="w-6 h-6" />} title="Self Paced" desc="Recorded Lectures" />

          </div>
        </div>
      </div>
    </div>
  );
}

/* Reusable Feature Component */
const Feature = ({ icon, title, desc }) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border border-purple-200 text-purple-600">
      {icon}
    </div>
    <div>
      <h4 className="text-lg md:text-xl font-bold">{title}</h4>
      <p className="text-gray-500 text-sm md:text-base">{desc}</p>
    </div>
  </div>
);

export default Single;
