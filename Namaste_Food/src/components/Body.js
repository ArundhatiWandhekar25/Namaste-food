import RestroCards from "./RestaurantCard";
import RestroObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Initialize the state with the restaurant data from RestroObj
  const [listOfRestro, setListOfRestro] = useState(RestroObj.data);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter restaurants with avgRating greater than 4.2
            const filterList = RestroObj.data.filter(
              (res) => res.card.card.info.avgRating > 4.3
            );

            // Update the state with the filtered list
            setListOfRestro(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restro-container">
        {/* If listOfRestro is populated, render the cards */}
        {listOfRestro.length > 0 ? (
          listOfRestro.map((restaurant) => (
            <RestroCards
              key={restaurant.card.card.info.id}
              resObj={restaurant}
            />
          ))
        ) : (
          <p>No restaurants found with a rating greater than 4.5</p>
        )}
      </div>
    </div>
  );
};

export default Body;
