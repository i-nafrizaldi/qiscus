import { BASE_API_URL } from "@/utils/config";
import axios from "axios";

export const getChat = async () => {
  try {
    const res = await axios.get(`${BASE_API_URL}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
