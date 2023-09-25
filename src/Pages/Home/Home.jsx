import React from "react";
import Banner from "../../components/Header/Banner";
import { useLoaderData } from "react-router-dom";
import Campaings from "../../components/Campaings/Campaings";

const Home = () => {
    const campaings = useLoaderData()
    
  return (
    <div>
      <Banner />
      <Campaings campaings={campaings}/>
    </div>
  );
};

export default Home;
