import React from "react";

/* Reusable Components */
const Feature = ({ title, desc, img }) => (
  <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center">
    <img src={img} alt={title} className="w-16 h-16 mx-auto mb-6" />
    <h4 className="text-xl font-bold mb-2">{title}</h4>
    <p className="text-gray-600">{desc}</p>
  </div>
);

const ContactItem = ({ label, value }) => (
  <div>
    <p className="font-semibold text-purple-600">{label}</p>
    <p className="text-gray-700">{value}</p>
  </div>
);

function Contact() {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-yellow-50 py-20 px-6 lg:px-20">

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h1 className="text-5xl font-extrabold text-purple-700 mb-6">
            Career Support & Guidance
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            We don't just teach skills — we help you build a successful career.
            Our dedicated career support team guides you from learning to landing
            your dream job.
          </p>

          <p className="text-lg text-gray-600 mb-8">
            Whether you need resume reviews, interview preparation, job referrals,
            or career guidance, we're here to support you at every step.
          </p>

          <div className="flex gap-6 flex-wrap">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition">
              Talk to Career Expert
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition">
              Book Free Counseling
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Career Support"
            className="rounded-3xl shadow-2xl w-full max-w-lg"
          />
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="max-w-7xl mx-auto mb-24">
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-14">
          How We Support Your Career
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <Feature
            title="Resume Building"
            desc="ATS-friendly resumes crafted by industry experts."
            img="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          />
          <Feature
            title="Interview Preparation"
            desc="Mock interviews & real-world interview questions."
            img="https://cdn-icons-png.flaticon.com/512/942/942748.png"
          />
          <Feature
            title="Job Referrals"
            desc="Access to hiring partners and referrals."
            img="https://cdn-icons-png.flaticon.com/512/1087/1087840.png"
          />
          <Feature
            title="Career Mentorship"
            desc="1-on-1 guidance from experienced mentors."
            img="https://cdn-icons-png.flaticon.com/512/1995/1995539.png"
          />
        </div>
      </div>

      {/* CONTACT DETAILS */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="bg-white rounded-3xl p-10 shadow-lg">
          <h3 className="text-3xl font-bold text-purple-700 mb-6">
            Get in Touch
          </h3>
          <p className="text-gray-600 mb-8">
            Reach out to our career support team for personalized assistance.
          </p>
          <div className="space-y-6 text-lg">
            <ContactItem label="Email" value="Xpertsupport@gmail.com" />
            <ContactItem label="Phone" value="+91 98765 43210" />
            <ContactItem label="Working Hours" value="Mon – Sat | 10:00 AM – 7:00 PM" />
            <ContactItem label="Location" value="Noida, India" />
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            alt="Contact Career Team"
            className="rounded-3xl shadow-xl w-full max-w-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
