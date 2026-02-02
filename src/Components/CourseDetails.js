import { useParams } from "react-router-dom";
import { Clock, BarChart, Layers, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import Single from "./Single";

function CourseDetails() {
  const { id } = useParams();
  const [show, setShow] = useState(false);

  useEffect(() => {
    // trigger animation after mount
    setTimeout(() => setShow(true), 50);
  }, []);

  const courses = [
    {
      id: 1,
      title: "React Development",
      subtitle: "Build modern, scalable frontend applications",
      image: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
      description: "This React course takes you from fundamentals to advanced concepts with real-world projects and best practices.",
      duration: "8 Weeks",
      level: "Beginner → Advanced",
      price: 699,
      features: ["JSX & Components", "State & Props", "Hooks (useState, useEffect)", "React Router", "API Integration", "Project Deployment",]
    },
    {
      id: 2,
      title: "Node.js Backend",
      subtitle: "Create scalable backend applications",
      image: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
      description: "Build secure and scalable backend systems using Node.js, Express, and MongoDB.",
      duration: "6 Weeks",
      level: "Intermediate",
      price: 699,
      features: ["Node.js Core Concepts", "Express.js Framework", "RESTful APIs", "MongoDB Integration", "Authentication & Authorization", "Backend Deployment",],
    },
    {
      id: 3,
      title: "Angular Development",
      subtitle: "Build enterprise-grade frontend applications",
      image: "https://tse4.mm.bing.net/th/id/OIP.gvI-qoVKgyrsnycYK_AZIwHaHa?pid=Api&P=0&h=180",
      description: "Learn Angular from scratch and build robust, scalable single-page applications using modern Angular architecture.",
      duration: "7 Weeks",
      level: "Beginner → Intermediate",
      price: 699,
      features: ["Angular CLI", "Components & Modules", "Services & Dependency Injection", "Routing & Guards", "RxJS & Observables", "Real-world Project",],
    },
    {
      id: 4,
      title: "Next.js Development",
      subtitle: "Build fast, SEO-friendly React applications",
      image: "https://www.chaiyohosting.com/img/nextjs-img.png",
      description: "Master Next.js to build high-performance web apps with server-side rendering, static generation, and modern routing.",
      duration: "6 Weeks",
      level: "Intermediate",
      price: 699,
      features: ["Next.js App Router", "Server-side Rendering (SSR)", "Static Site Generation (SSG)", "API Routes", "Authentication", "Deployment with Vercel",],
    },
    {
      id: 5,
      title: "Web Development (MERN Stack)",
      subtitle: "Become a full-stack web developer",
      image: "https://tse2.mm.bing.net/th/id/OIP.zJ1tH9_FpoAHbJypkD2mZQHaHa?pid=Api&P=0&h=180",
      description: "A complete full-stack program covering MongoDB, Express, React, and Node.js with multiple real-world projects.",
      duration: "10 Weeks",
      level: "Beginner → Advanced",
      price: 999,
      features: ["HTML, CSS, JavaScript", "React Frontend", "Node & Express Backend", "MongoDB & Mongoose", "JWT Authentication", "Full-stack Projects",],
    },
    {
      id: 6,
      title: "UI / UX Designing",
      subtitle: "Design beautiful & user-friendly interfaces",
      image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
      description: "Learn UI/UX design fundamentals, tools, and workflows to create engaging digital experiences.",
      duration: "5 Weeks",
      level: "Beginner",
      price: 699,
      features: ["Design Principles", "User Research", "Wireframing & Prototyping", "Figma & Design Tools", "Usability Testing", "Real Design Case Studies",],
    },];

  const course = courses.find(c => c.id === Number(id));
  console.log("id:",course)

  if (!course) {
    return <h2 className="p-10 text-xl">Course not found</h2>;
  }

  return (
    <div className="bg-gradient-to-br from-purple-300 to-yellow-50 py-16 px-6 lg:px-24 perspective-1000">

      {/* HERO SECTION */}
      <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">

        {/* IMAGE – 3D POP IN */}
        <div
          className={`
            flex justify-center
            transform-gpu transition-all duration-500
            ${show ? "opacity-100 scale-100 rotateY-0" : "opacity-0 scale-75 rotateY-12"}
          `}
        >
          <img
            src={course.image}
            alt={course.title}
            className="
              w-72 h-72 object-contain
              drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]
            "
          />
        </div>

        {/* TEXT – LINE BY LINE */}
        <div className="space-y-6">
          {/* Title */}
          <h1
            className={`
              text-5xl font-extrabold text-purple-700
              transform-gpu transition-all duration-500 delay-[100ms]
              ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
            `}
          >
            {course.title}
          </h1>

          {/* Subtitle */}
          <p
            className={`
              text-xl text-gray-600
              transform-gpu transition-all duration-500 delay-[200ms]
              ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
            `}
          >
            {course.subtitle}
          </p>

          {/* Description */}
          <p
            className={`
              text-gray-700 leading-relaxed
              transform-gpu transition-all duration-500 delay-[300ms]
              ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
            `}
          >
            {course.description}
          </p>

          {/* Meta Info */}
          <div
            className={`
              flex gap-6
              transform-gpu transition-all duration-500 delay-[400ms]
              ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
            `}
          >
            <div className="flex items-center gap-2">
              <Clock className="text-purple-600" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart className="text-purple-600" />
              <span>{course.level}</span>
            </div>
          </div>

          {/* CTA */}
          <button
            className={`
              bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold
              shadow-[0_12px_0_rgb(88,28,135)]
              transition-all duration-500 delay-[500ms]
              hover:-translate-y-1 hover:shadow-[0_18px_0_rgb(88,28,135)]
              ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
            `}
          >
            Enroll Now – ₹{course.price}
          </button>
        </div>
      </div>

      {/* WHAT YOU WILL LEARN */}
      <div className="bg-white rounded-3xl p-10 shadow-[0_40px_80px_rgba(0,0,0,0.2)] mb-20">
        <h2 className="text-3xl font-bold text-purple-700 mb-8">
          What you’ll learn
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {course.features.map((item, index) => (
            <div
              key={index}
              className="
                flex items-start gap-3 bg-purple-50 p-4 rounded-xl
                transform-gpu transition hover:-translate-y-1 hover:shadow-lg
              "
            >
              <CheckCircle className="text-purple-600 mt-1" />
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* COURSE INCLUDES */}
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Layers, title: "Hands-on Projects" },
          { icon: Clock, title: "Lifetime Access" },
          { icon: BarChart, title: "Beginner Friendly" },
        ].map((item, i) => (
          <div
            key={i}
            className="
              bg-white p-8 rounded-2xl text-center
              transform-gpu transition-all duration-300
              hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.25)]
            "
          >
            <item.icon className="mx-auto text-purple-600 mb-4" size={32} />
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600">
              Build real skills with confidence
            </p>
          </div>
        ))}
      </div>

      <Single courseTitle={course.title} />
    </div>
  );
}

export default CourseDetails;
