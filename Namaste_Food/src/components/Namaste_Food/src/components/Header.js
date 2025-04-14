import React from "react";
import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = ()=> {
    const [btnName, setBtnName] = useState("Login");
    const {loggedInUser} = useContext(UserContext);
    const cartItems = useSelector((store)=>store.cart.items);

    const online = useOnlineStatus();

    useEffect(()=>{

    },[])
     
    return (
        <div className="flex justify-between bg-gray-100 shadow-lg mb-2 ">
            <div className="logo-container">
               <img className="w-32" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-5 m-4 ">
                    <li className="px-4">
                        online Status : {online ? "✅" :"❌" }
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold text-xl">
                       
                        <Link to="/cart"> Cart({cartItems.length} items)</Link>
                    </li>
                    <button className="login" onClick={
                        ()=>{
                            btnName=="Login"?setBtnName("Logout"):setBtnName("Login");
                        }
                    }>{btnName}</button>
                     <li className="px-4">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
}



export default Header;