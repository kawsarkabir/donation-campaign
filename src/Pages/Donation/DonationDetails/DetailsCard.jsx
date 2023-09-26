import React from "react";
import swal from "sweetalert";

const DetailsCard = ({ details }) => {
  const handleDonation = () => {
    console.log(details);
    const arr = [];
    const getDonationItems = JSON.parse(localStorage.getItem("donation"));

    if (!getDonationItems) {
      arr.push(details);
      localStorage.setItem("donation", JSON.stringify(arr));
      swal("Congratulation !!", "Donation Successfully!", "success");
    } else {
      const isExit = getDonationItems.find((details) => details.id === id);
      if (!isExit) {
        arr.push(...getDonationItems, details);
        localStorage.setItem("donation", JSON.stringify(arr));
        swal("Congratulation !!", "Donation Successfully!", "success");
      } else {
        swal("Don't duplicate donation items!", "You can clicked the another donation item!", "error");

      }
    }
  };
  const { image, id, title, description, price } = details;
  return (
    <div className="max-w-screen-xl mx-auto my-16 px-5">
      <img src={image} alt="" className="rounded-lg w-full" />
      <div className="bg-[#0B0B0B] bg-opacity-60 relative -top-24 rounded-b py-6">
        <button
          onClick={handleDonation}
          className="btn bg-red-500 px-10 ml-5 border-none text-white"
        >
          DONATION ${price}
        </button>
      </div>
      <h1 className="text-3xl font-medium my-5">{title}</h1>
      <p className="leading-7 text-justify">{description}</p>
    </div>
  );
};

export default DetailsCard;
