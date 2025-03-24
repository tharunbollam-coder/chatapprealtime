"use client";

import {
  Phone,
  Video,
  Mic,
  Paperclip,
  SmilePlus,
  Camera,
  CircleChevronLeft,
} from "lucide-react";

const ChatWindow = (props) => {
  return (
    <div className=" bg-white p-4 rounded-r-lg col-span-7">
      <div className="flex items-center justify-between border-b pb-2">
        <CircleChevronLeft className="text-[#9747FF] mb-2" />
        <div className="flex items-center space-x-3">
          <img
            src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">Anil</p>
            <p className="text-xs text-gray-500">Online - Last seen, 2:02pm</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <Phone className="w-5 h-5 text-[#9747FF]" />
          <Video className="w-5 h-5 text-[#9747FF]" />
        </div>
      </div>

      <div className="p-4 space-y-3 h-96 overflow-y-auto">
        <div className="flex items-center space-x-2">
          <div className="bg-gray-200 text-gray-700 p-2 rounded-lg">
            Hey There!
          </div>
          <span className="text-xs text-gray-500">Today, 8:30pm</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-gray-200 text-gray-700 p-2 rounded-lg">
            How are you?
          </div>
        </div>
        <div className="flex items-center space-x-2 justify-end">
          <span className="text-xs text-gray-500">Today, 8:33pm</span>
          <div className="bg-purple-600 text-white p-2 rounded-lg">Hello!</div>
        </div>
        <div className="flex items-center space-x-2 justify-end">
          <div className="bg-purple-600 text-white p-2 rounded-lg">
            I am fine and how are you?
          </div>
          <span className="text-xs text-gray-500">Today, 8:34pm</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-gray-200 text-gray-700 p-2 rounded-lg">
            I am doing well, Can we meet tomorrow?
          </div>
          <span className="text-xs text-gray-500">Today, 8:36pm</span>
        </div>
        <div className="flex items-center space-x-2 justify-end">
          <span className="text-xs text-gray-500">Today, 8:58pm</span>
          <div className="bg-purple-600 text-white p-2 rounded-lg">
            Yes Sure!
          </div>
        </div>
      </div>

      <div className="flex items-center p-2 border-t">
        <Paperclip className="w-5 h-5 text-[#9747FF]" />
        <input
          type="text"
          placeholder="Type your message here..."
          className="flex-1 mx-3 p-2 bg-gray-100 rounded-full"
        />
        <SmilePlus className="w-5 mr-1 h-5 text-[#9747FF]" />
        <Camera className="w-5 h-5 text-[#9747FF]" />
        <div className="p-3 bg-purple-600 rounded-full ml-3">
          <Mic className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
