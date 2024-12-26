"use client";

import React from "react";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";

const CookiesSessionButton = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleCreateCookiesSession = async () => {
    setIsLoading(true);
    try {
      await fetch("/api/cookies/session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cookieName: "CookieSessionName",
          cookieValue: "CookieSessionValue",
        }),
      });
      toast.success("Cookies Session Created");
    } catch (error) {
      toast.error("Error Creating Cookies Session");
      console.log(error);
    }
    setIsLoading(false);
  };
  return (
    <div>
      <button
        onClick={handleCreateCookiesSession}
        disabled={isLoading}
        className="flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded"
      >
        <BeatLoader size={10} color="#FFF" loading={isLoading} />
        <span>Create Cookies Session</span>
      </button>
    </div>
  );
};

export default CookiesSessionButton;
