import RestaurantCard from "./RestaurantCard";
import resList from "./utils/mockData";
import { useState } from "react";

const Body = () =>{
    // state varible - super powerful variable 
    const [listOfRestaurants,setListOfRestaurants] = useState(resList);
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                 onClick={() =>{
                    // filter logic here
                    const filteredList = listOfRestaurants.filter(
                        (res) =>res.info.avgRating>4.3
                    );
                    // console.log(listOfRestaurants);
                    setListOfRestaurants(filteredList);
                    }}
                    >
                        Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                  {listOfRestaurants.map((restaurant)=>(
                  <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                  ))}
                  {/* {resList.map((restaurant,index)=>(
                  <RestaurantCard key={index} resData={restaurant}/>
                  ))} */}
            </div>
        </div>
    )
};

export default Body;