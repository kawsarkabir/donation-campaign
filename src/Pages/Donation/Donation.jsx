import React, { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [dataLength, setDataLength] = useState(4);
  const [donation, setDonation] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);
  const donationItems = JSON.parse(localStorage.getItem("donation"));
  useEffect(() => {
    if (donationItems) {
      setDonation(donationItems);
    } else {
      setNoDataFound("NO DATA FOUND !!");
    }
  }, []);
  return (
    <div>
      {noDataFound ? (
        <p className="min-h-screen flex justify-center items-center">
          {noDataFound}
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 px-2">
          {donation.slice(0, dataLength).map((donation) => (
            <DonationCard key={donation.id} donation={donation} />
          ))}
        </div>
      )}
      <div className="flex justify-center items-center mt-5">
        <div className={dataLength === donation.length && "hidden"}>
          <button
            onClick={() => setDataLength(donation.length)}
            className={donation.length > 4 ? "block btn btn-primary" : "hidden"}
          >
            show all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donation;
