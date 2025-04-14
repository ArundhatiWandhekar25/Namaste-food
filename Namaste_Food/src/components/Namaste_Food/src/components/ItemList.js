import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const handleAddItem = (item)=>{
        //Dispatch aticon
        dispatch(addItem(item));
    }


    return (
        <div className="p-4">
            {items.map((item) => (
                <div data-testid="foodItems"
                    key={item.card.info.id}
                    className="flex justify-between items-center border-b border-gray-300 py-4"
                >
                    {/* Left Content: Item Info */}
                    <div className="w-8/12">
                        <h3 className="text-lg font-semibold text-gray-800">{item.card.info.name}</h3>
                        <p className="text-sm text-gray-600">
                            ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{item.card.info.description}</p>
                    </div>

                    {/* Right Content: Image & Button */}
                    <div className="w-3/12 relative">
                        <img
                            src={IMG_CDN_URL + item.card.info.imageId}
                            alt={item.card.info.name}
                            className="w-full h-24 object-cover rounded-lg shadow-md"
                        />
                        <button className="absolute bottom-2 right-2 bg-green-500 text-white px-3 py-1 rounded-md shadow-md hover:bg-green-600 transition duration-300"
                        onClick={()=>handleAddItem(item)}>
                            Add +
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
