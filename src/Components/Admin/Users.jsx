import React, { useEffect, useState } from "react";

function Users() {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    // 🔹 Dummy data (replace with API)
    useEffect(() => {
        const dummyUsers = [
            { id: 1, name: "Anmol", email: "anmol@gmail.com", upi: "anmol@upi" },
            { id: 2, name: "Rahul", email: "rahul@gmail.com", upi: "rahul@upi" },
            { id: 3, name: "Priya", email: "priya@gmail.com", upi: "priya@upi" },
            { id: 4, name: "Amit", email: "amit@gmail.com", upi: "amit@upi" },
            { id: 5, name: "Neha", email: "neha@gmail.com", upi: "neha@upi" },
            { id: 6, name: "Ravi", email: "ravi@gmail.com", upi: "ravi@upi" },
        ];
        setUsers(dummyUsers);
    }, []);

    // 🔹 Pagination logic
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const totalPages = Math.ceil(users.length / usersPerPage);

    return (
        <div className="p-4 md:p-8">
            <h1 className="text-xl md:text-2xl font-bold mb-6 text-center">
                Users Management
            </h1>

            {/* TABLE (Desktop) */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full bg-white shadow rounded-lg">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">UPI ID</th>
                            <th className="p-3 text-left">Phone No.</th>

                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.map((user) => (
                            <tr key={user.id} className="border-b">
                                <td className="p-3">{user.name}</td>
                                <td className="p-3">{user.email}</td>
                                <td className="p-3">{user.upi}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* CARDS (Mobile) */}
            <div className="grid gap-4 md:hidden">
                {currentUsers.map((user) => (
                    <div key={user.id} className="bg-white p-4 rounded-lg shadow">
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>UPI:</strong> {user.upi}</p>
                    </div>
                ))}
            </div>

            {/* PAGINATION */}
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