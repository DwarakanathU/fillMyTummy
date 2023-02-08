import React, { useEffect, useState } from "react";
import Card from "../utils/Card";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/Helper";
import { Link } from "react-router-dom";
import { cloudinary_url } from "../utils/constants";
import useFetch from "../utils/useFetch";

const Body = () => {
  const [allRestuarant, setAllRestuarants] = useState([]);
  const [filteredRestaurents, setFliteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const restaurantData = useFetch(cloudinary_url);
  // console.log("inisde body", restaurantData);
  useEffect(() => {
    getResto();
  }, [searchText]);

  const getResto = async () => {
    // const resData = await fetch(cloudinary_url);
    // const response = await resData.json();
    // const newData = response?.data?.cards;
    if (!restaurantData) {
      return;
    }
    const newData = restaurantData?.cards;
    console.log("new data", newData);
    const filteredData = newData?.filter(
      (card) => card.cardType === "restaurant"
    );
    const updatedData = filteredData.map((card) => card?.data?.data);
    setAllRestuarants(updatedData);
    setFliteredRestaurants(updatedData);
  };

  if (!allRestuarant) {
    return null;
  }

  return allRestuarant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-bar">
        <input
          type="text"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const data = filterData(searchText, allRestuarant);
            setFliteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="body-card">
        {filteredRestaurents?.length === 0 ? (
          <h3>No Restaurents Found With that name</h3>
        ) : (
          filteredRestaurents.map((restaurant) => (
            <Link to={"/restaurant/" + restaurant.id} key={restaurant.id}>
              <Card {...restaurant} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
