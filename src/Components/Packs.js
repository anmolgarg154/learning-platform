import React, { useEffect, useState } from "react";
import img1 from "../Components/Images/A1.png"

function Packs() {
    const [progress, setProgress] = useState(0);

    // Continuous progress animation
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
        }, 60);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full overflow-hidden">


            <div className="w-full flex justify-between mt-20 mb-10">
                <div className="text-3xl font-bold p-6 ">
                <h1  className="text-6xl font-bold ">Study Your Favourite Course</h1><span className="inline-block bg-indigo-100 px-3 py-1 rounded-lg text-indigo-700 ml-2">
              Free
            </span>
                  <ul className="p-10">
                    <li>📚 Build Carrer With Us </li>
                    <li>🚀 Learn From Industry Experts</li>
                    <li>🎓 Get Certificate</li>
                    <li>👨‍🏫 Get Personalized Guidance</li>
                    <li>📚 Work on Real Projects</li>
                    <li>📈 Improve Your Skills</li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <div>
                    <img
                src={img1}
                alt=""
                className="w-full  object-cover p-6 rounded-3xl"
            />

                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 m-4 md:m-10 justify-center">


                <div
                    className="bg-yellow-400 w-full md:w-[400px] h-auto md:h-60 rounded-xl shadow-lg
    hover:shadow-2xl hover:-translate-y-2 transition-all duration-300
    p-4 flex flex-col"
                >
                    <h3 className="text-2xl md:text-3xl text-white font-bold mb-2 text-center md:text-left">
                        Customized Course Pack
                    </h3>

                    <p className="text-purple-600 font-semibold bg-white rounded-md px-3 py-2 inline-block mb-3 mx-auto md:mx-0">
                        🎬 Choose Any 4 or 4+ Courses
                    </p>

                    <h1 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-2 text-center md:text-left">
                        ₹1,499
                    </h1>

                    <p className="text-base md:text-lg font-semibold text-center text-gray-800 mb-3">
                        Avail 100% REFUND in 1 year
                    </p>

                    <div className="flex justify-center mt-auto">
                        <button className="bg-white text-purple-600 font-bold py-2 px-6 rounded-lg">
                            Enroll Now
                        </button>
                    </div>
                </div>


                <div
                    className="bg-red-400 w-full md:w-[400px] h-auto md:h-60 rounded-xl shadow-lg
    hover:shadow-2xl hover:-translate-y-2 transition-all duration-300
    p-4 flex flex-col"
                >
                    <h3 className="text-2xl md:text-3xl text-white font-bold mb-2 text-center md:text-left">
                        Customized Course Pack
                    </h3>

                    <p className="text-purple-600 font-semibold bg-white rounded-md px-3 py-2 inline-block mb-3 mx-auto md:mx-0">
                        🎬 Choose Any 4 or 4+ Courses
                    </p>

                    <h1 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-2 text-center md:text-left">
                        ₹3,999
                    </h1>

                    <p className="text-base md:text-lg font-semibold text-center text-gray-800 mb-3">
                        Avail 100% REFUND in 1 year
                    </p>

                    <div className="flex justify-center mt-auto">
                        <button className="bg-white text-purple-600 font-bold py-2 px-6 rounded-lg">
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>

            {/* HOW TO ENROLL */}
            <div className="bg-purple-600 text-white font-bold p-6 md:p-10 m-4 md:m-10 rounded-lg shadow-lg">
                <h3 className="text-center text-3xl md:text-6xl">
                    How to Enroll
                </h3>
            </div>

            {/* ================= LEARN FOR FREE SECTION ================= */}
            <div className="bg-[#4B0D4F] py-20 px-6 lg:px-20 text-white">

                <h2 className="text-center text-4xl lg:text-5xl font-extrabold mb-16">
                    Here's how you will <br />
                    <span className="text-pink-300">learn for Free</span>
                </h2>

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT STEPS */}
                    <div className="space-y-6">


                        {/* STEP 1 */}
                        <div className="bg-white text-black rounded-2xl p-6 flex items-center gap-6 shadow">
                            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
                                    alt="Enroll"
                                    className="w-8 h-8"
                                />
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-purple-700">Enroll</h3>
                                <p>
                                    Enroll into your favorite Courses by paying <b>₹699</b>
                                </p>
                            </div>
                        </div>


                        {/* STEP 2 */}
                        <div className="bg-white text-black rounded-2xl p-6 flex items-center gap-6 shadow">
                            <div className="relative w-16 h-16">
                                <svg className="w-full h-full rotate-[-90deg]">
                                    <circle
                                        cx="32"
                                        cy="32"
                                        r="28"
                                        stroke="#E5E7EB"
                                        strokeWidth="6"
                                        fill="none"
                                    />
                                    <circle
                                        cx="32"
                                        cy="32"
                                        r="28"
                                        stroke="#9333EA"
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
                                <span className="absolute inset-0 flex items-center justify-center font-bold text-purple-700">
                                    {progress}%
                                </span>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-purple-700">
                                    Complete Course
                                </h3>
                                <p>With all the lectures and Assignments</p>
                            </div>
                        </div>


                        {/* STEP 3 */}
                        <div className="bg-white text-black rounded-2xl p-6 flex items-center gap-6 shadow">
                            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1040/1040230.png"
                                    alt="Refund"
                                    className="w-8 h-8"
                                />
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-purple-700">
                                    100% Refund awarded
                                </h3>
                                <p>Get 100% of Fees back in your bank account</p>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT INFO */}
                    <div className="bg-purple-800 rounded-3xl p-10 w-150 h-100 shadow-xl">
                        <h3 className="text-3xl font-bold mb-6">Duration of course</h3>
                        <ul className="space-y-4 text-lg">
                            <li>
                                ✅ Get <b>lifetime course access</b>, even after 100% refund
                            </li>
                            <li>
                                ✅ For <b>100% refund</b>, complete course within <b>3 months</b>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* ========================================================= */}

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



        </div>
    );
}

const Card = ({ title, desc, img }) => (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 transition">
        <img src={img} alt={title} className="h-40 mx-auto mb-6" />
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600">{desc}</p>
    </div>
);

// const CourseCard = ({ title }) => (
//     <div className="border border-purple-200 rounded-xl p-6 text-center bg-purple-50">
//         <h3 className="text-xl font-semibold text-purple-800">{title}</h3>
//     </div>
// );

export default Packs;
