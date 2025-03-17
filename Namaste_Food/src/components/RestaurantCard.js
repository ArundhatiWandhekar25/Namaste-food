import { CDN_URL } from "../utils/constants";
import { useState } from "react";

const RestroCards = (props) => {
    const { resObj } = props;
    const resInfo = resObj.card.card.info;
    return (
        <div className="restro-card">
            <img
                className="restro-logo"
                alt="restro-logo"
                src={CDN_URL + resInfo.cloudinaryImageId}
            />
            <h3>{resInfo.name}</h3>
            <h4>{resInfo.cuisines.join(", ")}</h4>
            <h4>{resInfo.avgRating} star</h4>
            <h4>{resInfo.costForTwo}</h4>
            <h4>{resInfo.sla.deliveryTime} minutes</h4>
        </div>
    );
}



export default RestroCards;