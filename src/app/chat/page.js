"use client";

import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";
import Sidebar from "./components/SideBar";
import ProtectedRoute from "../components/ProtectedRoute";

const page = () => {
  return (
    <ProtectedRoute>
      <div className="bg-[#EFF6FC] p-6 grid grid-cols-12 gap-4 h-[100vh]">
        <Sidebar />
        <ChatList />
        <ChatWindow />
      </div>
    </ProtectedRoute>
  );
};

export default page;
