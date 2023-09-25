import React from "react";

const DetailsCard = ({ details }) => {
  console.log(details);
  const { image, id, title, description, price } = details;
  return (
    <div className="max-w-screen-xl mx-auto my-16 px-5">
      <img src={image} alt="" className="rounded-lg w-full" />
      <div className="bg-[#0B0B0B] bg-opacity-60 relative -top-24 rounded-b py-6">
        <button className="btn bg-red-500 px-10 ml-5 border-none text-white">
          DONATION ${price}
        </button>
      </div>
      <h1 className="text-3xl font-medium my-5">{title}</h1>
      <p className="leading-7 text-justify">{description}</p>
    </div>
  );
};

export default DetailsCard;
