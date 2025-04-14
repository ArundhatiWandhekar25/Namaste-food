import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCards = (props) => {
    const { resData } = props;

    // console.log(resData);
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
    } = resData;

    return (
        <div data-testid="resCard" className="m-4 p-4 w-[300px] rounded-lg bg-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-[420px]">
            {/* Restaurant Image */}
            <img
                className="rounded-lg w-full h-48 object-cover mb-4"
                alt="restro-logo"
                src={IMG_CDN_URL + cloudinaryImageId}
            />
            {/* Restaurant Name */}
            <h3 className="font-semibold text-xl text-gray-800 mb-2">{name}</h3>
            {/* Cuisines */}
            <h4 className="text-sm text-gray-500 mb-2">{cuisines.join(", ")}</h4>
            {/* Rating */}
            <h4 className="text-sm text-yellow-500 mb-2">{avgRating}⭐</h4>
            {/* Cost for Two */}
            <h4 className="text-lg font-semibold text-gray-800">₹{costForTwo / 100} FOR TWO</h4>
        </div>
    );
};

//Higher order component , takes input of restro card and output will be restro card promoted

export const withPromotedLabel = (RestaurantCards) => {
    return (props)=> {
      return (
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded">Promoted</label>
          <RestaurantCards {...props}/>
        </div>
      )
    }
  }

export default RestaurantCards;
