import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./Pages/HomePage";
import RetrievePage from "./Pages/RetrievePage";
import UpdateLayout from "./layout/UpdateLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/user/:id" element={<RetrievePage />} />
      <Route path="/edit/:id" element={<UpdateLayout />} />
    </>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
