import React from "react";

const Banner = () => {
  const handleSearch = (e) => {
    e.preventDefault()
    console.log(e.target);
  };
  return (
    <div>
      <div
        className="hero h-[80vh]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/s2mJzzn/Rectangle-4282.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-80 bg-white"></div>
        <div className="hero-content text-center">
          <div>
            <h1 className="mb-5 text-5xl font-bold">
              I Grow By Helping People In Need
            </h1>
            <div className="flex justify-center">
              <input
                type="text"
                id="searchBtn"
                placeholder="Type here"
                className="input input-bordered rounded-r-none "
              />
              <button
                onClick={handleSearch}
                className="btn btn-primary rounded-l-none"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
