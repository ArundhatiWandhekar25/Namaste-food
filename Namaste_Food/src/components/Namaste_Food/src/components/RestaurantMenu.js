import { useState } from "react";
import useRestraurantMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";



const RestaurantMenu = ()=>{
    const {resId} = useParams();
    const [ showIndex, setShowIndex] = useState(null);
    const resInfo = useRestraurantMenu(resId);
    if(resInfo === null ) return <Shimmer />;

    const {name, cuisines, avgRating, costForTwo} = resInfo?.cards[2]?.card.card.info;


    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl my-6">{name}</h1>
            <p className="font-bold text-lg">{ cuisines.join(",") } - {costForTwo}</p>
            <h4>{avgRating} Star</h4>
            {categories.map((category, index)=>
              <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} showItems={index ===showIndex?true:false} setShowIndex={() => setShowIndex(index === showIndex ? null : index)} />
            )}
        </div>
    );
};



export default RestaurantMenu;