import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { cloudinary_image, cloudinary_menu_url } from "../utils/constants";
import useFetch from "../utils/useFetch";
import Shimmer from "./Shimmer";

const RestaurantPage = () => {
  const { resId } = useParams();
  // const [restaurantDetails, setRestaurantDetails] = useState(null);

  const restaurantDetails = useFetch(cloudinary_menu_url + resId);

  // useEffect(() => {
  //   getRestrantData();
  // }, []);

  // async function getRestrantData() {
  //   const resData = await fetch(cloudinary_menu_url + resId);
  //   const responseData = await resData.json();
  //   const resJson = responseData.data;
  //   setRestaurantDetails(resJson);

  //   return resData.data;
  // }

  return !restaurantDetails ? (
    <Shimmer />
  ) : (
    <div className="restaurant">
      <div className="restaurant_details">
        <img
          src={cloudinary_image + restaurantDetails?.cloudinaryImageId}
          alt={name}
        />
        <h1>{restaurantDetails?.name}</h1>
        <h2>avgRating : {restaurantDetails?.avgRating}</h2>
        <h3>
          Address : {restaurantDetails?.area},{restaurantDetails?.city}
        </h3>
        <h4>avarage Cost for two People {restaurantDetails?.costForTwoMsg}</h4>
      </div>
      <div className="restaurant_menu">
        {Object.values(restaurantDetails?.menu?.items).map((item) => (
          <Link to={"/restaurant/" + resId + "/" + item.id} key={item.id}>
            <div className="card-item">
              <img src={cloudinary_image + item?.cloudinaryImageId} alt="" />
              <li>{item.name}</li>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantPage;
