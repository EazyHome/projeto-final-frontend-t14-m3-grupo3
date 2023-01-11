import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/dashboard/dashboard";
import { HomePage } from "../pages/homepage/homepage";
import { Login } from "../pages/login/login";
import { NotFound } from "../pages/notFound/notFound";
import { Register } from "../pages/register/register";
import { DashboardClient } from "../pages/dashboard/client/dashboardclient";
import { DashboardService } from "../pages/dashboard/service/dashboardservice";


export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboardclient" element={<DashboardClient />} />
      <Route path="/dashboardservice" element={<DashboardService />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
