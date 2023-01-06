import React from "react";
import { StarRating } from "../../components/StarRating/StarRating";
import { useContext, useEffect } from "react";
import { ProfileContext } from "../../contexts/ProfileContext/profileContext";

export const Dashboard = () => {
  const { isLogged } = useContext(ProfileContext);

  useEffect(() => {
    isLogged();
  });

  return (
    <div>
      <StarRating />
    </div>
  );
};
