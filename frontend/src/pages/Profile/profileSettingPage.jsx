import React from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function ProfileSettingPage() {
    
   const navigate = useNavigate();
  const { authUser, logout, generateApiKey } = useAuthStore();

  const handleLogout = async () => {
    await logout();
     navigate("/");
  };

  const handleGenerateApiKey = async () => {
    await generateApiKey();
  };



  return (
    <div className="space-y-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-white">Account Settings</h1>

      {/* User Info */}
      <div className="bg-white/10 p-4 rounded-xl text-white shadow">
        <p><span className="font-semibold">Name:</span> {authUser?.name}</p>
        <p><span className="font-semibold">Email:</span> {authUser?.email}</p>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-4">
        {/* <Button onClick={handleGenerateApiKey} className="bg-indigo-600 hover:bg-indigo-700">
          Generate API Key
        </Button> */}

        <Button onClick={handleLogout} variant="destructive" className="btn">
          Logout
        </Button>
      </div>

     
      <div>
        <label className="block text-white mb-1">Update Profile</label>
        <input className="w-full p-2 rounded" placeholder="New Name..." />
      </div>
    </div>
  );
}
