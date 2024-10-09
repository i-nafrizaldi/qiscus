import { User } from "./user.type";

export interface Room {
  id: number;
  name: string;
  image_url: string;
  participant: User[];
}
