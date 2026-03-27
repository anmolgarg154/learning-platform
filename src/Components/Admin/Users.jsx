import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const usersPerPage = 5;

    // ✅ Fetch API instead of dummy data
    useEffect(() => {
        axios.get("http://localhost:5000/admin/users")
            .then((reply) => {
                if (reply.status === 200) {
                    setUsers(reply.data.data); // ✅ correct data path
                    console.log(reply.data.data);
                }
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            });
    }, []);

    // ✅ Pagination logic
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const totalPages = Math.ceil(users.length / usersPerPage);

    return (
        <div className="p-4 md:p-8">
            <h1 className="text-xl md:text-2xl font-bold mb-6 text-center">
                Users Management
            </h1>

            {/* ✅ TABLE (Desktop) */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full bg-white shadow rounded-lg">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-3 text-left">Id</th>
                            <th className="p-3 text-left">Username</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">Phone Number</th>
                            <th className="p-3 text-left">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.map((user) => (
                            <tr key={user._id} className="border-b">
                                <td className="p-3">{user._id}</td>
                                <td className="p-3">{user.Username}</td>
                                <td className="p-3">{user.Email}</td>
                                <td className="p-3">{user.PhoneNumber}</td>
                                <td className="p-3">{user.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ✅ CARDS (Mobile) */}
            {/* <div className="grid gap-4 md:hidden overflow-hidden">
                {currentUsers.map((user) => (
                    <div key={user._id} className="bg-white p-4 rounded-lg shadow">
                        <p><strong>Name:</strong> {user.Username}</p>
                        <p><strong>Email:</strong> {user.Email}</p>
                        <p><strong>Phone:</strong> {user.PhoneNumber}</p>
                        <p><strong>Role:</strong> {user.role}</p>
                    </div>
                ))}
            </div> */}

            {/* ✅ PAGINATION */}
            <div className="flex justify-center mt-6 gap-2 flex-wrap">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-4 py-2 rounded ${
                            currentPage === index + 1
                                ? "bg-green-500 text-white"
                                : "bg-gray-200"
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Users;