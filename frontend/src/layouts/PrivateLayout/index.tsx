import React from "react"
import { Outlet } from "react-router-dom"
import ScrollTop from "@components/ScrollTop";
import Header from "@/components/Header/Header";

const PrivateLayout = () => {
  return (
    <div>
      <Header />
      <ScrollTop />
      <Outlet />
    </div>
  )
}

export default PrivateLayout;