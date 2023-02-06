import { cloudinary_image } from "./constants";

const Card = ({ cloudinaryImageId, avgRating, name, cuisines }) => {
  return (
    <div className="card-holder">
      <img src={cloudinary_image + cloudinaryImageId} alt={`${name} image`} />
      <span>{name}</span>
      <p>{avgRating} stars</p>
      <h4>{cuisines && cuisines.join(", ")}</h4>
    </div>
  );
};

export default Card;
