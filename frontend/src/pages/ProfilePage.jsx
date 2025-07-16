import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function ProfilePage() {
  return (
    <div className="flex flex-col lg:flex-row max-w-6xl mx-auto mt-8 bg-white shadow rounded-xl overflow-hidden">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 border-b lg:border-b-0 lg:border-r border-gray-200 p-4">
        <div className="mb-6 text-center">
          <img
            src="https://api.dicebear.com/8.x/initials/svg?seed=JD"
            alt="User avatar"
            className="w-20 h-20 mx-auto rounded-full mb-2"
          />
          <h2 className="text-lg font-semibold">John Doe</h2>
          <p className="text-xs text-gray-500">john@example.com</p>
        </div>
        <nav className="space-y-2">
          <NavLink
            to="/profile"
            end
            className={({ isActive }) =>
              `block px-3 py-2 rounded hover:bg-indigo-50 ${
                isActive ? "bg-indigo-100 text-indigo-600 font-medium" : "text-gray-700"
              }`
            }
          >
            Overview
          </NavLink>
          <NavLink
            to="/profile/orders"
            className={({ isActive }) =>
              `block px-3 py-2 rounded hover:bg-indigo-50 ${
                isActive ? "bg-indigo-100 text-indigo-600 font-medium" : "text-gray-700"
              }`
            }
          >
            My Orders
          </NavLink>
          <NavLink
            to="/profile/reviews"
            className={({ isActive }) =>
              `block px-3 py-2 rounded hover:bg-indigo-50 ${
                isActive ? "bg-indigo-100 text-indigo-600 font-medium" : "text-gray-700"
              }`
            }
          >
            My Reviews
          </NavLink>
          <NavLink
            to="/profile/wishlist"
            className={({ isActive }) =>
              `block px-3 py-2 rounded hover:bg-indigo-50 ${
                isActive ? "bg-indigo-100 text-indigo-600 font-medium" : "text-gray-700"
              }`
            }
          >
            Wishlist
          </NavLink>
          <NavLink
            to="/profile/settings"
            className={({ isActive }) =>
              `block px-3 py-2 rounded hover:bg-indigo-50 ${
                isActive ? "bg-indigo-100 text-indigo-600 font-medium" : "text-gray-700"
              }`
            }
          >
            Settings
          </NavLink>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-4">
        {/* Here sub-routes will render */}
        <Outlet />
      </main>
    </div>
  );
}
