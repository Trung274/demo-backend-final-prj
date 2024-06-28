import React from "react"
import { Outlet } from "react-router-dom"
import './index.css';
import Header from '@/components/Header/Header';
import ScrollTop from "../../components/ScrollTop";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <ScrollTop />
      <Outlet />
    </div>
  )
}

export default MainLayout;