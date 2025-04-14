import RestaurantCards, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurants, setListOfRestraunt] = useState([]);
    const [filterRestaurants, setFilterRestaurants] = useState([]);
    const { loggedInUser,setUserName} = useContext(UserContext);
    let [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCards);

  useEffect(() => {
    fetchData();
    console.log("useEffect called");
  }, []);  // Adding empty dependency array to only run once

  const fetchData = async () => {
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
  
    const json = await data.json();
    // console.log(json);
      //optional chaining
      const restaurants1 = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      const restaurants2 = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      
      const combinedRestaurants = [...restaurants1, ...restaurants2];
      
      setListOfRestraunt(combinedRestaurants);
      setFilterRestaurants(combinedRestaurants);
  };

  const onlineStatus = useOnlineStatus();
   if(onlineStatus === false) return( <h1>Looks like you're offline!! Please Check uour internet connection;</h1> );

  //conditional rendering
//   if(listOfRestaurants.length==0){
//     return <Shimmer />;
//   }

  return (listOfRestaurants.length==0)?<Shimmer /> :(
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
            <input type="text" data-testid="searchInput"  className="border border-solid border-balck" value={searchText} onChange={
                (e)=>{
                    setSearchText(e.target.value);
                }}></input>
            <button className="px-5 py-2 bg-green-500 m-4 rounded-lg" onClick={()=>{
              const filterRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRestaurants(filterRestaurant);
              console.log(searchText);  
            }}>Search</button>
        </div>
        <div className="search m-4 p-4 flex items-center">
        <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestraunt(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div>
          <label>UserName: </label>
          <input className="p-2 border border-black-50" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input>
        </div>
       
      </div>

      <div className="flex flex-wrap gap-[10px] ">
        { filterRestaurants.map((restaurant) => (
           <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}>
            {restaurant.info.promoted ? <RestaurantCardPromoted  resData={restaurant?.info} /> : <RestaurantCards resData={restaurant?.info} />}
           </Link> 
          )
        )}
      </div>
    </div>
  );
};

export default Body;
