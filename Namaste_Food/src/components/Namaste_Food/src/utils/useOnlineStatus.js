import { useState, useEffect } from "react";

const useOnlineStatus = ()=>{
    //try to check if online status
    const [onlineStatus , setOnlineStatus] = useState(true);

    useEffect (()=>{
        window.addEventListener("offline", ()=>{
            setOnlineStatus(false);
        });

        window.addEventListener("online", ()=>{
            setOnlineStatus(true);
        });

    },[]);
    return useOnlineStatus;   //boolean value
};


export default useOnlineStatus;