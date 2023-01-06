import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/dashboard/dashboard";
import { HomePage } from "../pages/homepage/homepage";
import { Login } from "../pages/login/login";
import { Register } from "../pages/register/register";
import { DashboardClientPage } from "../pages/dashboard/dashboardclient";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboardclient" element={<DashboardClientPage />} />
      <Route path="/dashboardservice" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
