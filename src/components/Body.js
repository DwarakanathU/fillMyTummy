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
  console.log("inisde body", restaurantData);
  useEffect(() => {}, [searchText]);

  const getResto = async () => {
    const data = restaurantData && restaurantData?.cards;
    console.log(data, "cards");
    const filteredData = await data
      ?.filter((card) => card.cardType === "restaurant")
      .map((card) => card?.data?.data);
    setAllRestuarants(filteredData);
    setFliteredRestaurants(filteredData);
  };

  if (!allRestuarant) return null;

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
