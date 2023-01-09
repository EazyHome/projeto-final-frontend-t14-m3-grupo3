import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard/dashboard";
import { HomePage } from "../pages/Homepage/homepage";
import { Login } from "../pages/Login/login";
import { NotFound } from "../pages/NotFound/notFound";
import { Register } from "../pages/Register/register";
import { DashboardClient } from "../pages/Dashboard/client/dashboardclient";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboardclient" element={<DashboardClient />} />
      <Route path="/dashboardservice" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
