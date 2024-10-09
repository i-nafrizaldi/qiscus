"use client";

import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  const router = useRouter();

  // const logout = () => {
  //   localStorage.removeItem("token");
  //   dispatch(logoutAction());
  // };
  return (
    <>
      <div className="sticky top-0 hidden md:block bg-white shadow-md z-50">
        <div className="container px-4 mx-auto flex justify-between items-center h-14 ">
          <div className="flex gap-4 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {/* <p className="text-xl font-bold">{username}</p> */}
          </div>
          <p
            className="text-3xl cursor-pointer font-extrabold text-primary"
            onClick={() => {
              router.push("/");
            }}
          >
            VAN's
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
