import React, { useState } from 'react'
import AddCourse from './AddCourse'

function Admin() {
    const [activeTab, setActiveTab] = useState("AddCourse")

    return (
        <div className="min-h-screen flex bg-gray-100">

            {/* LEFT SIDEBAR */}
            <aside className="w-64 bg-green-50 border-r shadow-sm">
                <div className="p-5">
                    <h2 className="text-xl font-semibold mb-6">Admin Panel</h2>

                    <nav className="space-y-2">
                        <SidebarItem
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            tabName="Main"
                        />
                        <SidebarItem
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            tabName="AddCourse"
                        />
                        <SidebarItem
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            tabName="Payment"
                        />
                        <SidebarItem
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            tabName="Course Management"
                        />
                    </nav>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="flex-1 p-8">
                {renderContent(activeTab)}
            </main>
        </div>
    )
}

const renderContent = (activeTab) => {
    switch (activeTab) {
        case "Main":
            return (
                <div>
                    <h1 className="text-2xl font-bold mb-4 text-center">
                        Admin Dashboard
                    </h1>

                    <div className="grid grid-cols-3 gap-4">
                        <div className="w-full bg-blue-300 h-60 rounded-xl flex items-center justify-center"></div>
                        <div className="w-full bg-blue-300 h-60 rounded-xl flex items-center justify-center"></div>
                        <div className="w-full bg-blue-300 h-60 rounded-xl flex items-center justify-center"></div>
                    </div>
                </div>
            )

        case "AddCourse":
            return <AddCourse />

        case "Course Management":
            return (
                <div className="w-full bg-red-300 h-60 rounded-xl flex items-center justify-center">
                    Remove Course Content
                </div>
            )

        default:
            return null
    }
}

const SidebarItem = ({ activeTab, setActiveTab, tabName }) => {
    return (
        <button
            onClick={() => setActiveTab(tabName)}
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition
                ${activeTab === tabName
                    ? 'bg-green-500 text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
        >
            <span>{tabName}</span>
        </button>
    )
}

export default Admin
