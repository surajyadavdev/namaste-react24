import { useEffect, useState } from "react";
import { MENU_API } from "./constant";
const useRestaurantMenu = ({resId})=>{
    const[resInfo,setResInfo] = useState(null);
    // fetch data
    useEffect =(()=>{
        fetchData();
    },[]);
    const fetchData = async()=>{
        const data = await fetch(MENU_API + resId);
        console.log(data);
        // console.log(data);
        const json = await data.json();
        setResInfo(json.data);
    };
    return resInfo;

}
export default useRestaurantMenu;