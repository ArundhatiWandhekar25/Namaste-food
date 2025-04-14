import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Your Cart</h1>

            <div className="text-right mb-4">
                {cartItems.length > 0 && (
                    <button
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
                        onClick={handleClearCart}
                    >
                        Clear Cart
                    </button>
                )}
            </div>

            {cartItems.length === 0 ? (
                <h2 className="text-center text-gray-500 text-lg">
                    Cart is empty. Add items to the cart!
                </h2>
            ) : (
                <ItemList items={cartItems} />
            )}
        </div>
    );
};

export default Cart;
