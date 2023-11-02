import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="w-full max-w-[1440px] min-h-[calc(100vh-50px)] mx-auto">
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
