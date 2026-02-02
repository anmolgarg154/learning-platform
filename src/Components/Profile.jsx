import React, { useEffect, useState } from "react";
import axios from "axios";
import { Home, BookOpen, Edit, Lock, LogOut } from "lucide-react";

function Profile() {
    // =========================
    // STATE (belongs to Profile component)
    // =========================
    const [activeTab, setActiveTab] = useState("dashboard");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // =========================
    // FETCH PROFILE ON LOAD
    // =========================
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:5000/api/v1/users/profile",
                    { withCredentials: true } // cookies (JWT)
                );

                setUser(res.data.data);
            } catch (error) {
                console.error("Failed to fetch profile", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    return (
        <div className="min-h-screen flex bg-gray-100">

            {/* LEFT SIDEBAR */}
            <aside className="w-64 bg-green-50 border-r shadow-sm">
                <div className="p-5">
                    <h2 className="text-xl font-semibold mb-6">Profile</h2>

                    <nav className="space-y-2">
                        <SidebarItem
                            icon={<Home size={18} />}
                            text="Dashboard"
                            active={activeTab === "dashboard"}
                            onClick={() => setActiveTab("dashboard")}
                        />

                        <SidebarItem
                            icon={<BookOpen size={18} />}
                            text="My Courses"
                            active={activeTab === "courses"}
                            onClick={() => setActiveTab("courses")}
                        />

                        <SidebarItem
                            icon={<Edit size={18} />}
                            text="Update Profile"
                            active={activeTab === "update"}
                            onClick={() => setActiveTab("update")}
                        />

                        <SidebarItem
                            icon={<Lock size={18} />}
                            text="Change Password"
                            active={activeTab === "password"}
                            onClick={() => setActiveTab("password")}
                        />

                        <SidebarItem
                            icon={<LogOut size={18} />}
                            text="Logout"
                            danger
                            onClick={() => alert("Logged out")}
                        />
                    </nav>
                </div>
            </aside>

            {/* RIGHT CONTENT */}
            <main className="flex-1 p-8">
                <div className="bg-white rounded-xl shadow p-8 min-h-[300px]">
                    {/* 🔴 CHANGED: pass setUser to renderContent */}
                    {renderContent(activeTab, user, setUser, loading)}
                </div>
            </main>
        </div>
    );
}

/* ======================================================
   RIGHT SIDE CONTENT
   NOTE:
   - renderContent is OUTSIDE Profile
   - so we MUST pass setUser if we want to update state
====================================================== */
const renderContent = (tab, user, setUser, loading) => {

    if (loading) {
        return <p className="text-gray-500">Loading profile...</p>;
    }

    switch (tab) {

        /* ================= DASHBOARD ================= */
        case "dashboard":
            return (
                <div className="w-full">
                    <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

                    <div className="bg-green-50 border rounded-xl p-6">
                        <div className="flex flex-col sm:flex-row items-center gap-6">

                            {/* PROFILE IMAGE */}
                            <div className="relative">
                                <label htmlFor="profileImage" className="cursor-pointer">
                                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-green-400 overflow-hidden bg-white">
                                        <img
                                            src="https://tse4.mm.bing.net/th/id/OIP.Mvcr0QDsGXOx29cSBfXd6AHaE7?pid=Api&P=0&h=180"
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <span className="absolute bottom-1 right-1 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                        Edit
                                    </span>
                                </label>

                                <input type="file" id="profileImage" className="hidden" />
                            </div>

                            {/* USER INFO */}
                            <div className="text-center sm:text-left flex-1">
                                <h2 className="text-xl font-semibold">
                                    {user?.Username}
                                </h2>
                                <p className="text-gray-600">
                                    {user?.Email}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );

        /* ================= UPDATE PROFILE ================= */
        case "update":
            return (
                <>
                    <h1 className="text-3xl font-bold mb-4">Update Profile</h1>

                    <form
                        className="max-w-md space-y-4"
                        onSubmit={async (e) => {
                            e.preventDefault();

                            try {
                                // 🔴 CHANGED: PUT request updates DB
                                const res = await axios.put(
                                    "http://localhost:5000/api/v1/users/profile",
                                    {
                                        Username: user.Username,
                                        Email: user.Email,
                                        PhoneNumber: user.PhoneNumber,
                                    },
                                    { withCredentials: true }
                                );

                                // 🔴 CHANGED: sync UI with updated DB data
                                setUser(res.data.data);

                                alert("Profile updated successfully");
                            } catch (error) {
                                alert("Failed to update profile");
                            }
                        }}
                    >
                        <input
                            type="text"
                            className="w-full border p-2 rounded"
                            value={user.Username}
                            // 🔴 CHANGED: setUser now works (passed as argument)
                            onChange={(e) =>
                                setUser({ ...user, Username: e.target.value })
                            }
                            placeholder="Username"
                        />

                        <input
                            type="email"
                            className="w-full border p-2 rounded"
                            value={user.Email}
                            onChange={(e) =>
                                setUser({ ...user, Email: e.target.value })
                            }
                            placeholder="Email"
                        />

                        <input
                            type="text"
                            className="w-full border p-2 rounded"
                            value={user.PhoneNumber}
                            onChange={(e) =>
                                setUser({ ...user, PhoneNumber: e.target.value })
                            }
                            placeholder="Phone Number"
                        />

                        <button
                            type="submit"
                            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
                        >
                            Update Profile
                        </button>
                    </form>
                </>
            );

        /* ================= CHANGE PASSWORD ================= */
        case "password":
            return (
                <>
                    <h1 className="text-3xl font-bold mb-4">Change Password</h1>
                    <p>Password update coming soon.</p>
                </>
            );

        default:
            return null;
    }
};

/* ================= SIDEBAR ITEM ================= */
const SidebarItem = ({ icon, text, active, onClick, danger }) => {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition
                ${active ? "bg-gray-400 font-medium" : "hover:bg-gray-200"}
                ${danger ? "text-red-600 hover:bg-red-50" : "text-gray-700"}
            `}
        >
            {icon}
            <span>{text}</span>
        </button>
    );
};

export default Profile;
