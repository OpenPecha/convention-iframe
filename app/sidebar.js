"use client";
import { useState } from "react";
import BurgerIcon from "./burgerIcon";
export default function Sidebar({ children }) {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <>
      {showSidebar ? (
        <button
          className="fixed z-50 flex items-center text-3xl text-white cursor-pointer right-5"
          style={{ bottom: '22.5rem' }}
          onClick={() => setShowSidebar((prev) => !prev)}
        >
          ❌
        </button>
      ) : (
        <div 
          className="fixed z-50 flex items-center text-3xl text-white cursor-pointer right-10"
          style={{ bottom: '22rem' }}
          onClick={() => setShowSidebar(true)}
        >
          <BurgerIcon />
        </div>
      )}
      <div
        className={`bottom-0 right-0 w-[90vw] md:w-[50vw] bg-[#54606e] md:p-5 p-1 text-white fixed h-[50vh] z-40 ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col space-y-2">{children}</div>
      </div>
    </>
  );
}
