import axios from "axios";

export const getChat = async () => {
  try {
    const res = await axios.get("http://localhost:2000/results");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
