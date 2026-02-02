import { Link } from "react-router-dom";
import logo from "../Components/Images/Images.png"
function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
            <img src={logo} alt="logo"  className="w-16 h-16 rounded-full object-cover" />
          <h2 className="text-2xl p-1 font-bold text-sky-400">
            Xpert
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Learn smarter, grow faster with industry-ready courses designed for real-world skills.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/courses" className="hover:text-sky-400">Courses</Link></li>
            <li><Link to="/packs" className="hover:text-sky-400">Packs</Link></li>
            <li><Link to="/about-Us" className="hover:text-sky-400">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-sky-400">Contact Us</Link></li>
            <li><Link to="/Career" className="hover:text-sky-400">Career Support</Link></li>

          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/faq" className="hover:text-sky-400">FAQ</a></li>
            <li><a href="/terms" className="hover:text-sky-400">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-sky-400">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>
          <p className="text-sm text-slate-400">
            Email: Xpertsupport@gmail.com
          </p>
          <p className="text-sm text-slate-400 mt-2">
            Phone: +91 98765 43210
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-4 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Xpert. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
