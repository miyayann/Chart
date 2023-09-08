
import React from "react";
import { auth } from "../lib/FirebaseConfig";
import { signOut } from "firebase/auth";

const LogoutForm = () => {
  const handleSignOut = async () => {
    try {
      await signOut(auth); // Firebase Authenticationからサインアウト
    } catch (error) {
      console.error("サインアウトエラー:", error);
    }
  };

  return (
    <div>
      <button className="button w-40 h-10 bg-blue-500 rounded-full cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_8px_0_0_#1b6ff8,0_13px_0_0_#1b70f841]
    border-[1px] border-blue-400 text-white" onClick={handleSignOut}>サインアウト</button>
    </div>
  );
};

export default LogoutForm;
