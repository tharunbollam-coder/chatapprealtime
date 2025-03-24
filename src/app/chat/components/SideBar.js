"use client"

import { Home, LogOut, Phone, BotMessageSquare } from "lucide-react";
import axios from "axios";

const Sidebar = () => {
  const handleLogout = async () => {
    try {
      await axios.post("/api/auth/logout");
      window.location.href = "/auth/login";
    } catch (err) {
      console.error("Logout failed:", err.message);
      alert("Logout failed! Please try again.");
    }
  };

  return (
    <div className="col-span-1">
      <div className="bg-purple-600 w-[100%] lg:w-[80%] h-[100%] flex flex-col items-center py-4 space-y-6 rounded-md">
        <div className="mb-auto">
          <Home className="text-[white] mb-5" />
          <Phone className="text-[white] mb-5" />
          <BotMessageSquare className="text-[white] mb-5" />
        </div>
        <button
          onClick={handleLogout}
        >
          <LogOut className="text-red-400" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
