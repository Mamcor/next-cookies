"use client";

import React from "react";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";

const CookiesPersistantButton = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleCreateCookiesPersistant = async () => {
    setIsLoading(true);
    try {
      await fetch("/api/cookies/persistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cookieName: "CookiePersistantName",
          cookieValue: "CookiePersistantValue",
        }),
      });
      toast.success("Cookies Persistant Created");
    } catch (error) {
      toast.error("Error Creating Cookies Persistant");
      console.log(error);
    }
    setIsLoading(false);
  };
  return (
    <div>
      <button
        onClick={handleCreateCookiesPersistant}
        disabled={isLoading}
        className="flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded"
      >
        <BeatLoader size={10} color="#FFF" loading={isLoading} />
        <span>Create Cookies Persistant</span>
      </button>
    </div>
  );
};

export default CookiesPersistantButton;
