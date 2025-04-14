import React from "react";
import { useState } from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            userInfo: "Dummy",
            location: "Default",
            avatar_url: "hts//avatar/dummt"
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/ArundhatiWandhekar25");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        });
    }

    render() {
        const { name, location, avatar_url, bio } = this.state.userInfo;

        return (
            <div className="user-card w-full max-w-[400px] bg-teal-100 p-8 rounded-2xl shadow-lg mx-auto my-12 text-center transition-transform duration-300 ease-in-out transform hover:translate-y-2">
                {/* Avatar Image */}
                <img 
                    className="w-30 h-30 rounded-full object-cover mb-6 mx-auto" 
                    alt="user-avatar"
                    src={avatar_url} 
                />
                
                {/* Name Section */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h2>
                
                {/* Location Section */}
                <h3 className="text-lg text-gray-600 mb-2">{location}</h3>
                
                {/* About Me Section */}
                <h4 className="text-sm text-gray-500 mt-4 mb-4 max-h-[120px] overflow-hidden text-ellipsis line-clamp-3">
                    {bio}
                </h4>
                <div>
                    <UserContext.Consumer>
                        {({loggedInUser})=> <h1>{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
            </div>
        );
    }
}

export default UserClass;
