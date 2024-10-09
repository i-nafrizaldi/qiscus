import { User } from "./user.type";

export interface Message {
  participant: User;
  id: number;
  type: Type;
  message: string;
  sender: string;
}
export enum Type {
  text = "text",
  video = "video",
  pdf = "pdf",
  image = "image",
}
