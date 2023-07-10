import React from "react";

// Assets
import Search from "../../assets/icons/navigation/search.svg";

const Searchfield = () => {
  return (
    <div className="searchfield flex gap-4 p-6 border-r-4 bg-[#E6E8EB]">
      <img src={Search} alt="Zapshop logo" />
      <input
        type="text"
        placeholder="Find and discover clothes, gadgets, or even furnitures"
        className="body text-secondary bg-transparent"
      />
      <div className="search-categories"></div>
    </div>
  );
};

export default Searchfield;
