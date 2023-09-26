import React from "react";
import CampaingCard from "./CampaingCard";

const Campaings = ({ campaings }) => {
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-around max-w-screen-xl mx-auto p-5">
      {campaings.map((campaing) => (
        <CampaingCard key={campaing.id} campaing={campaing} />
      ))}
    </div>
  );
};

export default Campaings;
