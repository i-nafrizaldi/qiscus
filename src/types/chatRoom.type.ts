import { Message } from "./message.type";
import { Room } from "./room.type";
import { User } from "./user.type";

export interface ChatRoom {
  results: [room: Room, comments: Message[], participant: User[]];
}

// export interface ChatRoom {
//   results: {
//     room: Room;
//     comments: Message[];
//     participant: User[];
//   }[];
// }
