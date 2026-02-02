import { useEffect, useState } from "react";


              // new way
// function NewCourses() {
//   const [{ courses, loading, error }, setState] = useState({
//     courses: [],
//     loading: true,
//     error: "",
//   });

//   useEffect(() => {
//     fetch("http://localhost:8080/api/get/courses/all")
//       .then(res => {
//         if (!res.ok) throw new Error("Failed to fetch courses");
//         return res.json();
//       })
//       .then(data =>
//         setState({ courses: data, loading: false, error: "" })
//       )
//       .catch(err =>
//         setState({ courses: [], loading: false, error: err.message })
//       );
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading...</p>;
//   if (error) return <p className="text-center text-red-500">{error}</p>;

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">All Courses</h1>

//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {courses.map(({ id, image, title, description }) => (
//           <div key={id} className="bg-white rounded-xl shadow-md">
//             <img
//               src={`http://localhost:8080/${image}`}
//               alt={title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4 space-y-2">
//               <h2 className="text-xl font-semibold">{title}</h2>
//               <p className="text-gray-600 text-sm">{description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default NewCourses;

             // old way 

function NewCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/get/courses/all");

        if (!res.ok) {
          throw new Error("Failed to fetch courses");
        }

        const data = await res.json();
        setCourses(data); // ✅ array directly
        
        // find exexuton time 

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">All Courses</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id} // ✅ correct key
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={`http://localhost:8080/${course.image}`}
              alt={course.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">
                {course.title} {/* ✅ */}
              </h2>

              <p className="text-gray-600 text-sm">
                {course.description} {/* ✅ */}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewCourses;
