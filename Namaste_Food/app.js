import React from "react";
import ReactDOM from "react-dom/client";

const Header = ()=> {
    return (
        <div className="header">
            <div className="logo-container">
               <img className="logo" src="https://thumbs.dreamstime.com/b/fast-delivery-food-logo-vector-337616132.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const RestroObj = {
    data: [
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "663248",
              "name": "Persian Darbar",
              "cloudinaryImageId": "7aeb2bbff29d99d6e986240911ce0e71",
              "locality": "Camp",
              "areaName": "Camp",
              "costForTwo": "₹500 for two",
              "cuisines": ["North Indian", "Biryani", "Mughlai", "Kebabs", "Seafood", "Chinese", "Desserts", "Beverages"],
              "avgRating": 4.4,
              "sla": {
                "deliveryTime": 41,
                "lastMileTravel": 2.9,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "2.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
            }
          }
        }
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "20058",
              "name": "SP's Biryani House",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/14/2a8317be-9d3d-47fd-8c07-04fea898da31_0ebf25ce-452e-4eb1-9f87-f2f01e70512f.jpg",
              "locality": "Sadashiv Peth",
              "areaName": "Sadashiv Peth",
              "costForTwo": "₹900 for two",
              "cuisines": ["Biryani", "Indian", "Maharashtrian"],
              "avgRating": 4.5,
              "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              }
            }
          }
        }
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "5408",
              "name": "George Restaurant",
              "cloudinaryImageId": "vhz0acpzaau0wf1wa9m5",
              "locality": "Camp",
              "areaName": "Camp",
              "costForTwo": "₹750 for two",
              "cuisines": ["Biryani", "Mughlai", "Chinese", "Parsi"],
              "avgRating": 4.5,
              "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              }
            }
          }
        }
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "83296",
              "name": "PK Biryani House",
              "cloudinaryImageId": "pzg64dwsbfozjxxrjf4c",
              "locality": "Deccan Gymkhana",
              "areaName": "Deccan Gymkhana",
              "costForTwo": "₹400 for two",
              "cuisines": ["Biryani", "Maharashtrian", "North Indian", "Mughlai", "Hyderabadi", "Indian"],
              "avgRating": 4.3,
              "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 1.7,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              }
            }
          }
        }
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "982208",
              "name": "Dil Punjabi Daily",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/19/e80e423b-795d-45ef-b1c7-421593419781_982208.jpg",
              "locality": "Lokmanya Bal Gangadhar Tilak Road",
              "areaName": "Swargate",
              "costForTwo": "₹200 for two",
              "cuisines": ["Biryani", "Desserts", "Punjabi", "Bakery", "Thalis", "Combos", "North Indian", "Home Food", "Indian", "Snacks"],
              "avgRating": 4.1,
              "sla": {
                "deliveryTime": 41,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              }
            }
          }
        }
      }
    ]
  }
  
  



const RestroCards = (props) => {
    const { resObj } = props;
    const resInfo = resObj.card.card.info;
    return (
        <div className="restro-card">
            <img
                className="restro-logo"
                alt="restro-logo"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resInfo.cloudinaryImageId}`}
            />
            <h3>{resInfo.name}</h3>
            <h4>{resInfo.cuisines.join(", ")}</h4>
            <h4>{resInfo.avgRating} star</h4>
            <h4>{resInfo.costForTwo}</h4>
            <h4>{resInfo.sla.deliveryTime} minutes</h4>
        </div>
    );
}

const Body = ()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restro-container">
            {/* {RestroObj.data.map((restaurantData, index) => (
                    <RestroCards key={index} resObj={restaurantData} />
                ))} */}

{
    RestroObj.data.map((restaurant) => (
        <RestroCards key={restaurant.card.card.info.id} resObj={restaurant} />
    ))
}
                {/* <RestroCards 
                resName="KFC" 
                cuisine="Burger, Fast Food"
                star="4.5stars"
                time="30mins"
                /> */}

            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            

        </div>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);