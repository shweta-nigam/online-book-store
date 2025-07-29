import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";

export default function ProfilePage() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    if (!authUser) checkAuth();
  }, [authUser, checkAuth]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[linear-gradient(90deg,rgba(0,0,0)_0%,rgba(5,87,150)_35%,rgba(0,0,0)_100%)] px-4 py-10">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row bg-white/10 backdrop-blur-md rounded-3xl shadow-xl border border-white/10 overflow-hidden">
        
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 border-b lg:border-b-0 lg:border-r border-white/20 p-6 text-white">
          <div className="mb-8 text-center">
            <img
              src={`https://api.dicebear.com/8.x/initials/svg?seed=${authUser?.name || "JD"}`}
              alt="User avatar"
              className="w-24 h-24 mx-auto rounded-full border-4 border-indigo-500 shadow-lg"
            />
            {isCheckingAuth ? (
              <p className="text-gray-300 mt-2">Loading...</p>
            ) : authUser ? (
              <>
                <h2 className="text-xl font-bold mt-2">{authUser.name}</h2>
                <p className="text-sm text-gray-300">{authUser.email}</p>
              </>
            ) : (
              <p className="text-sm text-red-300">Not logged in</p>
            )}
          </div>

          <nav className="space-y-3">
            {[
              { label: "Overview", to: "/profile" },
              { label: "My Orders", to: "/profile/orders" },
              { label: "My Reviews", to: "/profile/reviews" },
              { label: "Wishlist", to: "/profile/wishlist" },
              { label: "Settings", to: "/profile/settings" },
            ].map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-indigo-500 text-white font-semibold shadow-md"
                      : "hover:bg-indigo-400/20 text-gray-300"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 p-6 text-white min-h-[400px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}


