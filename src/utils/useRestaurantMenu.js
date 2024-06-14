import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";
const useRestaurantMenu = (resId)=>{
    const[resInfo,setResInfo] = useState(null);

    // fetch data
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async()=>{
        const data = await fetch(MENU_API + resId);
        // console.log(data);
        // console.log("abc2");
        // console.log(data);
        const json = await data.json();
        console.log("abc");
        console.log(json);
        // console.log(json);
        setResInfo(json.data);// data is from apis
    };
    return resInfo;

};
export default useRestaurantMenu; 