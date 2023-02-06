const Shimmer = () => {
  return (
    <div className="shimmer_restaurantlist">
      {Array(30)
        .fill("")
        .map((i, index) => (
          <div className="shimmer_card" key={index}>
            <div className="spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
