import { useParams } from "react-router-dom";

const RestaurantItem = () => {
  const params = useParams();
  console.log("individual Item", params);
  return (
    <>
      {/* <h1>{itemId}</h1> */}
      <h1>Individual item</h1>
    </>
  );
};
export default RestaurantItem;
