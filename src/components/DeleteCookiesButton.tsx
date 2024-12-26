"use client";

import React from "react";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";

const DeleteCookiesButton = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleCreateCookiesPersistant = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/cookies/deleteCookies", {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Cookies Deleted");
        const data = await response.json();
        console.log("Error Deleting Cookies", data);
      } else {
        toast.error("Error Deleting Cookies");
      }
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
        className="flex justify-center items-center gap-2 bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-4 rounded"
      >
        <BeatLoader size={10} color="#FFF" loading={isLoading} />
        <span>Create Cookies Persistant</span>
      </button>
    </div>
  );
};

export default DeleteCookiesButton;
