"use client";

import ChatWindow from "@/components/ChatWindow";
import Loading from "@/components/Loading";
import SideBar from "@/components/SideBar";
import { Message } from "@/types/message.type";
import { Room } from "@/types/room.type";
import { User } from "@/types/user.type";
import { useEffect, useState } from "react";
import { getChat } from "./api/chatRoom/getChat";

interface Result {
  room: Room;
  comments: Message[];
  participant: User[];
}

const ChatPage = () => {
  const [chats, setChats] = useState<Result[]>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const chatData = await getChat();
        setChats(chatData);
      } catch (err: any) {
        setError(err.message);
      }
    };
    fetchChats();
  }, []);

  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!chats)
    return (
      <div className="text-center">
        <Loading />
      </div>
    );

  return (
    <div className="md:container mx-auto h-screen py-3">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar for participant */}
        <SideBar chats={chats} />
        {/* Chat messages area */}
        <ChatWindow chats={chats} />
      </div>
    </div>
  );
};

export default ChatPage;
