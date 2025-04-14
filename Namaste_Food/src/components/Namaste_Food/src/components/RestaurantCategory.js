import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

    // const [ showItems, setShowItems] = useState(false);
    const handleClick = () =>{

      setShowIndex();
    }


    return (
        <div className="w-3/5 mx-auto my-6">
            {/* Header */}
            <div className="bg-gray-100 shadow-lg p-4 rounded-lg">
                <div className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-xl text-gray-800">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span className="cursor-pointer text-gray-600 hover:text-gray-800 transition">
                        ⬇️
                    </span>
                </div>

                {/* Item List */}
                {showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    );
};

export default RestaurantCategory;
