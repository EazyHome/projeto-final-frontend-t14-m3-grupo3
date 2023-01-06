import React from "react";
import { useContext, useEffect } from "react";
import { ProfileContext } from "../../contexts/ProfileContext/ProfileContext";

export const Dashboard = () => {
  const { isLogged } = useContext(ProfileContext);

  useEffect(() => {
    isLogged();
  });

  return <div>dashboard</div>;
};
