import Head from "next/head";
import React from "react";
import { router } from "next/router";
import { links } from "../../global";
import { useAuth } from "../../firebase/authProvider";

const Header = () => {
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <Head>
        <title>Austin Loh | Home</title>
      </Head>
      <div className="w-full bg-[#e5e7eb]">
        <div className="w-full max-w-6xl mx-auto flex justify-between items-center h-full px-5 py-5">
          {/* Logo */}
          <div
            className="bg-[#ECFF01] inline-block h-[104px] w-[104px] group hover:bg-black transition duration-500 ease-in-out cursor-pointer"
            onClick={() => {
              router.push(links.home);
            }}
          >
            <div className="flex w-full h-full items-center justify-center">
              <p className="font-ocb text-[24px] group-hover:text-white text-black">
                al.
              </p>
            </div>
          </div>

          {/* Logout button */}
          <div className="flex justify-center items-center h-full">
            <div
              className="flex justify-center items-center border-[#333333] border-[1px] rounded-md group hover:bg-black ease-in-out duration-300 cursor-pointer px-5 py-2"
              onClick={handleLogout}
            >
              <p className="p text-[#333333] group-hover:text-white">Logout</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
