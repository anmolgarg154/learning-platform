import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Courses from "./Components/Courses";
import Packs from "./Components/Packs";
import Single from "./Components/Single";
import CourseDetails from "./Components/CourseDetails";
import AboutUs from "./Components/AboutUs";
import CareerSupport from "./Components/CareerSupport";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Logout from "./Components/Logout";
import AddCourse from "./Components/Admin/AddCourse"
import NewCourses from "./Components/NewCourses";
import Profile from "./Components/Profile";

function App() {
  return (
    <Routes>
      {/* Public Website Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/packs" element={<Packs />} />
        <Route path="/aa" element={<Single />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/carrer" element={<CareerSupport />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/new" element={<NewCourses/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/add" element={<AddCourse/>}/>
      </Route>

      {/* Admin route (no header/footer) */}
      <Route path="/admin" element={<div>Admin Page</div>} />
    </Routes>
  );
}

export default App;
