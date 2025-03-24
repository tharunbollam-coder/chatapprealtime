"use client";

import ChatsItem from "./ChatsItem";
import SearchBar from "./Search"

const ChatList = (props) => {
  const chats  = [
    { name: "Anil", lastMessage: "April fool's day", time: "Today, 9:52pm", unread: 0 },
    { name: "Chuuthiya", lastMessage: "Baag", time: "Today, 12:11pm", unread: 1 },
    { name: "Mary ma’am", lastMessage: "You have to report it...", time: "Today, 2:40pm", unread: 1 },
    { name: "Bill Gates", lastMessage: "Nevermind bro", time: "Yesterday, 12:31pm", unread: 5 },
    { name: "Victoria H", lastMessage: "Okay, brother. let's see...", time: "Wednesday, 11:12am", unread: 0 },
  ];

  return (
    <div
      className={`bg-white rounded-lg p-5 shadow-md col-span-4`}
    >
      <SearchBar />
      <h1 className="text-[#303030] font-bold mb-5 mt-5 ml-2">Chats</h1>
      <ul className="p-0">
        {chats.map((chat) => (
          <ChatsItem
            key={chat.name}
            chat={chat}
          />
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
