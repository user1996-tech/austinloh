import { router } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuth } from "../firebase/authProvider";

const ProtectedRoute = ({ children, redirect = "/login" }) => {
  const byPass = false;
  const { user } = useAuth();
  const [checked, setChecked] = useState(byPass ? true : false);

  useEffect(() => {
    if (!byPass) {
      if (!user) {
        router.push(redirect);
      } else {
        setChecked(true);
      }
    }
  }, [user]);
  return (
    <>
      {checked ? (
        <>{children}</>
      ) : (
        <div className="bg-[#f1f1f1] w-full h-screen flex justify-center items-center">
          <p className="text-black font-semibold text-md">Loading ...</p>
        </div>
      )}
    </>
  );
};

export default ProtectedRoute;
