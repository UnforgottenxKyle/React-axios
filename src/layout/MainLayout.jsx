import React from "react";
import Form from "../components/Form";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Form />
      <Outlet />
    </>
  );
};

export default MainLayout;
