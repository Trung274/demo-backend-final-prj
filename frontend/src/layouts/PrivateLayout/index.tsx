import React from "react"
import { Outlet } from "react-router-dom"
import ScrollTop from "@components/ScrollTop";

const PrivateLayout = () => {
  return (
    <div>
      <ScrollTop />
      <Outlet />
    </div>
  )
}

export default PrivateLayout;