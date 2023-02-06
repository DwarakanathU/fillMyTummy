import { useEffect, useState } from "react";

export const filterData = (searchText, restaurants) => {
  console.log("filtered data serach text", searchText, restaurants);
  return restaurants.filter((restaurant) =>
    restaurant?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
};
