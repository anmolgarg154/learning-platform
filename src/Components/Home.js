import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Courses from "./Courses";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image:
        "https://assets.landingi.com/wp-content/uploads/2023/01/23004655/education-course-landing-pages.png",
    },
    {
      id: 2,
      image:
        "https://static.vecteezy.com/system/resources/previews/001/937/625/large_2x/online-education-application-learning-worldwide-on-phone-mobile-website-background-social-distance-concept-the-classroom-training-course-library-illustration-flat-design-vector.jpg",
    },
    {
      id: 3,
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4d10aa167358993.6427539376f8c.png",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className="w-full">

      {/* ================= HERO SLIDER ================= */}
      <div className="relative w-full h-screen overflow-hidden">

        {/* IMAGE */}
        <img
          src={slides[currentSlide].image}
          alt="slide"
          className="w-full h-full object-cover transition-opacity duration-1000"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0  bg-black/50" />

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Learn Skills That Matter 🚀
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-gray-200 mb-6">
            Hands-on courses, live mentorship & real projects.
          </p>

          <Link
            to="/courses"
            className="bg-lime-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-lime-500 transition"
          >
            Explore Now →
          </Link>
        </div>

        {/* PREV */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 
                     text-white p-3 rounded-full"
        >
          ❮
        </button>

        {/* NEXT */}
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 
                     text-white p-3 rounded-full"
        >
          ❯
        </button>

        {/* DOTS */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-8 h-3 rounded-full transition ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ================= FLOATING STATS BAR ================= */}
      <div className="relative z-20 -mt-24 px-4">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-4">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 
                          bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900
                          rounded-xl px-6 py-8 text-white">

            {/* STAT 1 */}
            <div className="flex items-center gap-4">
              <div className="bg-red-600 p-3 rounded-xl">
                <span className="text-xl">▶</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">1.4M+</h3>
                <p className="text-sm text-gray-300">YouTube Subscribers</p>
              </div>
            </div>

            {/* STAT 2 */}
            <div className="flex items-center gap-4 md:border-l border-white/20 md:pl-6">
              <span className="text-3xl text-yellow-400">👥</span>
              <div>
                <h3 className="text-2xl font-bold">650K+</h3>
                <p className="text-sm text-gray-300">Learners Worldwide</p>
              </div>
            </div>

            {/* STAT 3 */}
            <div className="flex items-center gap-4 md:border-l border-white/20 md:pl-6">
              <span className="text-3xl text-yellow-400">🎓</span>
              <div>
                <h3 className="text-2xl font-bold">74K+</h3>
                <p className="text-sm text-gray-300">Enrolled Learners</p>
              </div>
            </div>

            {/* STAT 4 */}
            <div className="flex items-center gap-4 md:border-l border-white/20 md:pl-6">
              <span className="text-3xl text-yellow-400">⭐</span>
              <div>
                <h3 className="text-2xl font-bold">6000+</h3>
                <p className="text-sm text-gray-300">5 Star Reviews</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= COURSES ================= */}
      <Courses />
    </div>
  );
}

export default Home;

























// <div className="w-full font-sans bg-gray-50">

    //   {/* Top Banner */}
    //   <div className="w-full bg-indigo-200 text-center py-2 text-lg md:text-xl font-semibold text-indigo-900">
    //     🚀 Start Learning Today – 100% Refund on Course Completion!
    //   </div>

    //   {/* Hero Section */}
    //   <div className="w-full flex flex-col md:flex-row gap-10 mt-6 md:mt-12 px-4 md:px-10">

    //     {/* LEFT HERO */}
    //     <div className="flex flex-col mt-8 md:mt-20 gap-6 md:w-1/2">


    //       {/* Heading */}
    //       <h1 className="text-3xl md:text-6xl font-bold text-gray-900 leading-snug">
    //         Unlock Your Potential <span>🎓 </span> with Hands-on Courses & Mentorship
    //         <span className="inline-block bg-indigo-100 px-3 py-1 rounded-lg text-indigo-700 ml-2">
    //           Free
    //         </span>
    //       </h1>

    //       {/* Subtext */}
    //       <p className="text-gray-700 text-base md:text-lg">
    //         Join thousands of learners mastering new skills with live support, practical projects, and career guidance.
    //       </p>

    //       {/* Rating */}
    //       <div className="flex items-center gap-3">
    //         <img
    //           src="https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_1280.png"
    //           alt="Google"
    //           className="w-5 md:w-6"
    //         />
    //         <p className="font-semibold text-sm md:text-base">4.9/5 ⭐⭐⭐⭐⭐</p>
    //       </div>

    //       {/* Buttons */}
    //       <div className="flex items-center gap-6 flex-wrap">
    //         <Link 
    //           to="/courses" 
    //           className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-lg transition transform hover:scale-105"
    //         >
    //           Explore Courses
    //         </Link>

    //         <div className="flex items-center gap-2 text-indigo-700 font-medium">
    //           <span className="text-xl">▶</span>
    //           100% Refund Guarantee
    //         </div>
    //       </div>
    //     </div>

    //     {/* RIGHT HERO IMAGE Grid */}
    //     <div className="relative flex justify-center w-full md:w-1/2">
    //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">

    //         {/* Card 1 */}
    //         <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-center h-60 md:h-72 
    //                         transition transform hover:scale-[1.05] hover:shadow-2xl cursor-pointer">
    //           <div className="space-y-4">
    //             <div className="flex items-center bg-green-100 p-3 rounded-lg transition hover:bg-green-200">
    //               <span className="text-xl mr-3">💯</span>
    //               <p className="font-semibold">100% Refund</p>
    //             </div>
    //             <div className="flex items-center bg-yellow-100 p-3 rounded-lg transition hover:bg-yellow-200">
    //               <span className="text-xl mr-3">💬</span>
    //               <p className="font-semibold">Instant Doubt Support</p>
    //             </div>
    //             <div className="flex items-center bg-purple-100 p-3 rounded-lg transition hover:bg-purple-200">
    //               <span className="text-xl mr-3">🎓</span>
    //               <p className="font-semibold">Internship & Projects</p>
    //             </div>
    //           </div>
    //         </div>

    //         {/* Card 2 */}
    //         <div className="bg-white shadow-lg rounded-2xl h-60 md:h-72 overflow-hidden 
    //                         transition transform hover:scale-[1.05] hover:shadow-2xl cursor-pointer flex items-center justify-center">
    //           <img
    //           src="https://www.makemyassignments.com/blog/wp-content/uploads/2023/03/AdobeStock_429176281.jpg"
    //             alt="student"
    //             className="h-full w-full object-cover rounded-2xl transition-transform duration-500 hover:scale-110"
    //           />
    //         </div>

    //         {/* Card 3 */}
    //         <div className="bg-white shadow-lg rounded-2xl h-60 md:h-72 overflow-hidden 
    //                         transition transform hover:scale-[1.05] hover:shadow-2xl cursor-pointer flex items-center justify-center">
    //           <img
    //           src="https://lirp.cdn-website.com/4b8185e2/dms3rep/multi/opt/Learning-1920w.jpg"
    //             alt="learning"
    //             className="h-full w-full object-cover rounded-2xl transition-transform duration-500 hover:scale-110"
    //           />
    //         </div>

    //         {/* Card 4 */}
    //        <div className="bg-white shadow-lg rounded-2xl h-60 md:h-72 overflow-hidden 
    //                         transition transform hover:scale-[1.05] hover:shadow-2xl cursor-pointer flex items-center justify-center">
    //           <img
    //           src="https://tse3.mm.bing.net/th/id/OIP.4TKYi2WyQDBGsDdKRtvtjwHaFI?pid=Api&P=0&h=180"
    //             alt="learning"
    //             className="h-full w-full object-cover rounded-2xl transition-transform duration-500 hover:scale-110"
    //           />
    //         </div>
    //       </div>
    //     </div>

    //   </div>

    //   {/* Learning Process Section */}
    //   <div className="max-w-7xl mx-auto py-16 px-6">
    //     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
    //       How You Learn With Us
    //     </h2>
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //       <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center">
    //         <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" className="w-16 h-16 mx-auto mb-4" alt="interactive" />
    //         <h3 className="font-semibold text-lg mb-2">Interactive Learning</h3>
    //         <p className="text-gray-600 text-sm">Hands-on projects and live mentorship for practical skills.</p>
    //       </div>
    //       <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center">
    //         <img src="https://cdn-icons-png.flaticon.com/512/1081/1081945.png" className="w-16 h-16 mx-auto mb-4" alt="personalized" />
    //         <h3 className="font-semibold text-lg mb-2">Personalized Guidance</h3>
    //         <p className="text-gray-600 text-sm">Get expert advice tailored to your career goals.</p>
    //       </div>
    //       <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center">
    //         <img src="https://cdn-icons-png.flaticon.com/512/709/709722.png" className="w-16 h-16 mx-auto mb-4" alt="certification" />
    //         <h3 className="font-semibold text-lg mb-2">Certification</h3>
    //         <p className="text-gray-600 text-sm">Earn certificates to showcase your skills and projects.</p>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Stats Section */}
    //   <div className="w-full mt-20 mb-0 bg-indigo-100 py-12">
    //     <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
    //       <div className="flex items-center justify-center space-x-4">
    //         <img src="https://cdn-icons-png.flaticon.com/512/2989/2989849.png" alt="Courses" className="w-12 h-12 sm:w-14 sm:h-14" />
    //         <div>
    //           <p className="text-2xl sm:text-[32px] font-semibold leading-none">50+</p>
    //           <p className="text-lg sm:text-[24px] text-gray-700 mt-1">Courses</p>
    //         </div>
    //       </div>
    //       <div className="flex items-center justify-center space-x-4">
    //         <img src="https://cdn-icons-png.flaticon.com/512/3076/3076176.png" className="w-12 h-12 sm:w-14 sm:h-14" />
    //         <div>
    //           <p className="text-2xl sm:text-[32px] font-semibold leading-none">100k+</p>
    //           <p className="text-lg sm:text-[24px] text-gray-700 mt-1">Learners</p>
    //         </div>
    //       </div>
    //       <div className="flex items-center justify-center space-x-4">
    //         <img src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png" className="w-12 h-12 sm:w-14 sm:h-14" />
    //         <div>
    //           <p className="text-2xl sm:text-[32px] font-semibold leading-none">100%</p>
    //           <p className="text-lg sm:text-[24px] text-gray-700 mt-1">Doubts Solved</p>
    //         </div>
    //       </div>
    //       <div className="flex items-center justify-center space-x-4">
    //         <img src="https://cdn-icons-png.flaticon.com/512/993/993699.png" className="w-12 h-12 sm:w-14 sm:h-14" />
    //         <div>
    //           <p className="text-2xl sm:text-[32px] font-semibold leading-none">10k+</p>
    //           <p className="text-lg sm:text-[24px] text-gray-700 mt-1">Projects Completed</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Courses Component */}
    //   <Courses/>

    // </div>
