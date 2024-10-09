import { Message } from "@/types/message.type";
import { Room } from "@/types/room.type";
import { User } from "@/types/user.type";
import React from "react";

interface Result {
  room: Room;
  comments: Message[];
  participant: User[];
}

const SideBar = ({ chats }: { chats: Result[] }) => {
  return (
    <>
      <div className="shadow-lg h-screen bg-slate-100 md:block hidden">
        <div className="flex flex-row items-center gap-4 bg-slate-200 z-50 p-6 sticky top-0">
          <p className="text-xl font-extrabold text-basicBlue">Chat</p>
        </div>
        <div className="p-4 h-screen">
          <div className="flex flex-col gap-2">
            {chats.map((d, i) => (
              <div
                key={i}
                className="flex flex-col hover:bg-basicBlue hover:text-white p-1 rounded-lg hover:cursor-pointer border border-basicBlue text-basicBlue"
              >
                {d.room.participant.find((p) => p.role === 2) && (
                  <p className="font-bold text-lg">
                    {d.room.participant.find((p) => p.role === 2)?.name}
                  </p>
                )}
                <p className="text-sm">{d.room.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
