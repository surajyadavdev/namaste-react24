// import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu =()=>{
    // const [resInfo,setResInfo] = useState(null);
    const {resId} = useParams();
    const dummy = "Dummy Data";
    const resInfo = useRestaurantMenu(resId);
    const [showIndex,setShowIndex] = useState(0)
    // console.log("RESiNFO :",resInfo);

    if(resInfo === null) return <Shimmer/>;
    console.log("EXECUTED");
    const {name,cuisines,costForTwoMessage} = resInfo?.cards?.[2]?.card?.card?.info || {};
    const {itemCards} = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};
    // console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(categories);
    return (
        <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
            {cuisines?.join(",")} - {costForTwoMessage} 
        </p>
        {/* categories accordians*/}
        {categories.map((category,index)=>(
        <RestaurantCategory 
        key={category.card.card.title}
        data={category?.card?.card}
        showItems={index === showIndex ? true:false}
        setShowIndex={()=> setShowIndex(index)}
        dummy={dummy}
        />
        ))}
        {/* <ul>
            {itemCards?.map((item)=>(
                <li key={item.card.info.id}>
                {item.card.info.name} -Rs. {" "}
                {item.card.info.price /100 || item.card.info.defaultPrice/100}
                </li>
            ))}   
        </ul> */}
        </div>

    )
};

export default RestaurantMenu; 



















// import { useParams } from "react-router-dom";
// import useRestaurantMenu from "../utils/useRestaurantMenu";
// import Shimmer from "./Shimmer";
// const RestaurantMenu = () =>{
//     // const[resInfo,setResInfo] = useState(null);
//     const {resId} = useParams();
//     // const params = useParams();

//     // Custom hooks 
//     const resInfo = useRestaurantMenu(resId);
//     console.log(resId);
//     console.log(resInfo);


// if (resInfo === null) return <Shimmer/>;

// const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
// const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
// console.log(itemCards);
// return(
//   <div className="menu">
//     <h1>Menu is not available</h1>
//       <h1>{name}</h1>
//       <p>{cuisines?.join(",")} - {costForTwoMessage}</p>
//       <h2>Menu</h2>
//       <ul>
//           {itemCards.map((item) => (
//               <li key={item.card.info.id}>
//                   {item.card.info.name} -{" Rs."}
//                   {item.card.info.price/100 || item.card.info.defaultPrice/100} 
//               </li>
//           ))}
//       </ul>
//   </div>
// );
// };

// export default RestaurantMenu;


    
    
// WITHOUT HOOK 

// import {useState, useEffect } from "react";
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constant";
// import useRestaurantMenu from "../utils/useRestaurantMenu";
// const RestaurantMenu =()=>{
//     const [resInfo,setResInfo] = useState(null);
//     const {resId} = useParams();
//     // const resInfo = useRestaurantMenu(resId);
//     // console.log(resInfo);

//     useEffect(()=>{
//         fetchMenu();
//     },[])
//     const fetchMenu = async()=>{
//         // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=10576");
//         const data =await fetch(MENU_API + resId)
//         const json = await data.json();
//         setResInfo(json.data)
//         console.log(json);

//     };

//     if(resInfo === null) return <Shimmer/>;

//     const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info || {};
//     const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};
//     // console.log(itemCards);


//     // console.log(resInfo);
//     return (
//         <div className="menu">
//         <h1>{name}</h1>
//         <h1>{cuisines.join(",")} - {costForTwoMessage} </h1>
//         <h2>Menu</h2>
//         <ul>
//             {itemCards.map((item)=>(
//                 <li key={item.card.info.id}>
//                 {item.card.info.name} -Rs. {" "}
//                 {item.card.info.price /100 || item.card.info.defaultPrice/100}
//                 </li>
//             ))}
//             {/* <li>{itemCards[0].card.info.name}</li>
//             <li>{itemCards[1].card.info.name}</li>
//             <li>{itemCards[2].card.info.name}</li>
//             <li>{itemCards[3].card.info.name}</li>
//             <li>{itemCards[4].card.info.name}</li>
//             <li>{itemCards[5].card.info.name}</li> */}
//         </ul>
//         </div>

//     )
// };

// export default RestaurantMenu; 