import { NextUIProvider } from "@nextui-org/react";
import Navbar from "../components/navigation_pages/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <NextUIProvider>
      <Navbar />
      <Outlet />
    </NextUIProvider>
  );
}
