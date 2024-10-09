import { Message, Type } from "@/types/message.type";
import Image from "next/image";
import React from "react";
import { Separator } from "./ui/separator";
import { ScrollArea } from "./ui/scroll-area";
import { Room } from "@/types/room.type";
import { User } from "@/types/user.type";

interface Result {
  room: Room;
  comments: Message[];
  participant: User[];
}

const ChatWindow = ({ chats }: { chats: Result[] }) => {
  return (
    <>
      <div className="col-span-3">
        {chats.map((data, idx) => (
          <div key={idx} className="mb-6 shadow-lg bg-white">
            <div className="flex flex-row items-center gap-4 bg-slate-200 p-6 sticky top-0 z-50">
              {data.room.participant.find((p) => p.role === 2) && (
                <p className="text-xl font-extrabold mx-auto md:mx-0 text-basicBlue">
                  {data.room.participant.find((p) => p.role === 2)?.name}
                </p>
              )}
            </div>
            <ScrollArea className="p-4 h-[760px]">
              <div className="flex flex-col gap-3 p-3">
                <Image
                  className="mx-auto"
                  alt="Room image"
                  src={data.room.image_url}
                  width={80}
                  height={80}
                />
                <h2 className="text-xl text-center font-bold">
                  {data.room.name}
                </h2>
              </div>
              <Separator />
              {data.comments.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-4 my-5 ${
                    msg.sender === "customer@mail.com"
                      ? "justify-start"
                      : "justify-end"
                  }`}
                >
                  <div className="flex flex-col gap-2">
                    <label
                      className={`flex items-start text-sm text-gray-600 font-bold ${
                        msg.sender === "customer@mail.com"
                          ? "justify-start"
                          : "justify-end"
                      }`}
                    >
                      {msg.participant.name}
                    </label>
                    <div
                      className={`p-3 rounded-lg ${
                        msg.sender === "customer@mail.com"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-black"
                      }`}
                    >
                      {/* Conditional rendering for message types */}
                      {msg.type == Type.text ? (
                        <p>{msg.message}</p>
                      ) : msg.type == Type.video ? (
                        <iframe
                          className="w-full h-64"
                          src={msg.message}
                          frameBorder="0"
                          allowFullScreen
                        />
                      ) : msg.type == Type.pdf ? (
                        <iframe
                          className="w-full h-80"
                          src={msg.message}
                          title="PDF Viewer"
                        >
                          Browser tidak mendukung tampilan PDF. Unduh di sini{" "}
                          <a href={msg.message}>Download PDF</a>.
                        </iframe>
                      ) : msg.type == Type.image ? (
                        <Image
                          src={msg.message}
                          alt="Image message"
                          width={320}
                          height={200}
                          className="rounded-md"
                        />
                      ) : (
                        <p>Unknown message type</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChatWindow;
