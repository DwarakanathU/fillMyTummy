import React, { useEffect, useState } from "react";

const useRestaurantPage = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    restaurants();
  }, []);

  const restaurants = async () => {
    let promise = await fetch(url);
    let json = await promise.json();

    setData(json);
  };

  return data;
};

export default useRestaurantPage;
