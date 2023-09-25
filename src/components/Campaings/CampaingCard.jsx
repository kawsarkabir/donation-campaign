import React from "react";

const CampaingCard = ({ campaing }) => {
  const { image, text_color, card_bg_color, button_bg_color, title, category } =
    campaing || {};
  console.log(campaing);
  return (
    <div>
      <div className="card  h-80" style={{background:card_bg_color}}>
        <figure>
          <img src={image} alt="Shoes" className="w-full" />
        </figure>
        <div className=" p-5">
          <button className="btn-sm rounded" style={{background:button_bg_color}}>{category}</button>
          <h2 className="text-xl font-semibold" style={{color:text_color}}>{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default CampaingCard;
