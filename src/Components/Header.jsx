import { connect } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLogin } from "../Action";
import logo from "../Components/Images/Images.png";
import { Link } from "react-router-dom";

function Header({ commonData }) {
  const dispatch = useDispatch();

  // ✅ Restore login from localStorage on refresh
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(setLogin("Y"));
    }
  }, [dispatch]);

  // ✅ Check token directly (MAIN FIX)
  const token = localStorage.getItem("token");

  function f1() {
    return (
      <>
        <li className="nav-item active">
          <Link className="nav-link" to="/register">Register</Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
      </>
    );
  }

  function f2() {
    return (
      <>
        <li className="nav-item active">
          <Link className="nav-link" to="/profile">My Profile</Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/logout">Logout</Link>
        </li>
      </>
    );
  }

  return (
    <>
      <div className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              className="w-14 md:w-16 object-contain"
              alt="logo"
            />
            <span className="text-2xl md:text-3xl font-bold text-purple-600 tracking-wide">
              Xpert
            </span>
          </div>

          {/* Navigation */}
          <header>
            <nav>
              <ul className="hidden text-2xl font-bold md:flex items-center gap-8 text-gray-700 font-medium">
                <li>
                  <Link
                    to="/"
                    className="hover:text-purple-600 transition duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses"
                    className="hover:text-purple-600 transition duration-200"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-Us"
                    className="hover:text-purple-600 transition duration-200"
                  >
                    About
                  </Link>
                </li>

                {/* ✅ FIXED LOGIC (NO UI CHANGE) */}
                {token ? f2() : f1()}

              </ul>
            </nav>
          </header>

        </div>
      </div>
    </>
  );
}

let connectToStore = (state) => ({ commonData: state });

export default connect(connectToStore)(Header);