import React from "react";
import { useState } from "react";
// import FingerprintIcon from "@mui/icons-material/Fingerprint";
// import PersonIcon from "@mui/icons-material/Person";
import { useAuth } from "../firebase/authProvider";
import { toast, Toaster } from "react-hot-toast";
import { router } from "next/router";
import Head from "next/head";

const login = ({}) => {
  const { login } = useAuth();
  const redirect = router?.query?.redirect ? router.query.redirect : "";
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const [loading, setLoading] = useState(false)
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("submit -> ", email, password);

    if (password == "") {
      toast.error("Password cannot be empty !");
    } else {
      const notification = toast.loading("Loading ...");

      login(email, password)
        .then((result) => {
          toast.success("Logging in. Please wait ...", { id: notification });
          if (redirect != "") {
            router.push(redirect);
          } else {
            router.push("/home");
          }
        })
        .catch((error) => {
          const errorMessage = error.message;
          const errorCode = error.code;

          toast.error("Incorrect password !", {
            id: notification,
          });
          setPassword("");
        });
    }
  };

  return (
    <>
      <Head>
        <title>Austin Loh - Login</title>
      </Head>

      <div className="w-full min-h-screen bg-black flex items-center justify-center">
        <Toaster position="top-right" />
        <div className=" w-full max-w-sm flex items-center flex-col space-y-5">
          <p className="text-[#999999] text-xl">Austin Loh</p>
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="flex flex-row justify-center items-center px-3 border-b border-b-[#999999]">
              <input
                type="text"
                placeholder="Email"
                className="w-full outline-none py-3 bg-transparent text-[#999999] placeholder-[#999999]"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {/* <PersonIcon
                sx={{ fontSize: 25 }}
                className={`
                text-[#999999]
                 cursor-pointer`}
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              /> */}
            </div>
            <div className="flex flex-row justify-center items-center px-3 border-b border-b-[#999999]">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full outline-none py-3 bg-transparent text-[#999999] placeholder-[#999999]"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {/* <FingerprintIcon
                sx={{ fontSize: 25 }}
                className={`${
                  showPassword ? "text-white" : "text-[#999999]"
                } cursor-pointer`}
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              /> */}
            </div>
            <button className="w-full py-2 rounded-sm bg-[#999999] border border-[#999999] group hover:bg-transparent">
              <p className="group-hover:text-[#999999]">Log In</p>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default login;
