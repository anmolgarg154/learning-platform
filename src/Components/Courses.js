import { useState } from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard, Code, Brush } from "lucide-react";
import Packs from "./Packs";

function Courses() {
  const categories = [
    { key: "all", label: "All Courses", icon: <LayoutDashboard size={18} /> },
    { key: "development", label: "Development", icon: <Code size={18} /> },
    { key: "design", label: "Design", icon: <Brush size={18} /> },
  ];

  const courses = [
    {
      id: 1,
      title: "React Development",
      category: "development",
      image: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
    },
    {
      id: 2,
      title: "Node.js Backend",
      category: "development",
      image: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    },
    {
      id: 3,
      title: "Angular Development",
      category: "development",
      image: "https://tse4.mm.bing.net/th/id/OIP.3k1p8lilrOXaLbpx-sQnwwHaHa?pid=Api&P=0&h=180",
    },
    {
      id: 4,
      title: "Next JS",
      category: "development",
      image: "https://www.chaiyohosting.com/img/nextjs-img.png",
    },
    {
      id: 5,
      title: "MERN Stack Development",
      category: "development",
      image: "https://tse2.mm.bing.net/th/id/OIP.zJ1tH9_FpoAHbJypkD2mZQHaHa?pid=Api&P=0&h=180",
    },
    {
      id: 6,
      title: "UI UX Designing",
      category: "design",
      image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCourses =
    activeCategory === "all"
      ? courses
      : courses.filter(c => c.category === activeCategory);

  return (
    <div className="bg-[#FFF8E7] py-16 px-6 md:px-10">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-5xl font-extrabold text-purple-700 mb-2">
          Browse Our Courses
        </h2>
        <p className="text-lg text-gray-600">
          Click a category to explore courses ⚡
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-6 mb-16 perspective-1000">
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`
              flex items-center gap-2 px-7 py-3 rounded-full border-2 font-semibold
              transform-gpu transition-all duration-300
              hover:-translate-y-1 hover:scale-105
              shadow-[0_8px_0_rgba(88,28,135,0.4)]
              active:translate-y-1
              ${
                activeCategory === cat.key
                  ? "bg-purple-600 text-white"
                  : "bg-white text-purple-600"
              }
            `}
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 perspective-1000">
        {filteredCourses.map(course => (
          <Link
            key={course.id}
            to={`/courses/${course.id}`}
            className="
              relative bg-white rounded-3xl p-6 block
              transform-gpu transition-all duration-500
              hover:rotateX-6 hover:-rotateY-6 hover:scale-[1.06]
              shadow-[0_20px_40px_rgba(0,0,0,0.18)]
              hover:shadow-[0_40px_80px_rgba(124,58,237,0.45)]
            "
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-xl opacity-0 hover:opacity-100 transition"></div>

            {/* Image */}
            <div className="relative flex justify-center mb-6">
              <img
                src={course.image}
                alt={course.title}
                className="
                  w-28 h-28 object-contain
                  transform-gpu transition-transform duration-500
                  hover:scale-125
                "
              />
            </div>

            {/* Title */}
            <h3 className="relative text-xl font-bold text-purple-700 text-center">
              {course.title}
            </h3>
          </Link>
        ))}
      </div>

      <Packs />
    </div>
  );
}

export default Courses;
