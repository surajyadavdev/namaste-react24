import RestaurantCard from "./RestaurantCard";
// import resList from "./utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{
    // state varible - super powerful variable 
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const[filteredRestaurants,setFilteredRestaurants] =useState([]);
    const [searchText,setSearchText] =useState("");

    // Whenever state variables upadte,react triggers a reconciliation cyle(re-renders the component )
    console.log("Body Rendered");
    useEffect(() =>{
        // console.log("use effect called ");
        fetchData();
    },[]);

    const fetchData = async()=>{
        // console.log("hi");
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        // console.log(data);

        const json = await data.json();
        // console.log(json);
        // optional chaining 
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }
    // conditional rendering 
    // if(listOfRestaurants.length ===0){
    //     // return <h1>Loading.......</h1>
    //     return <Shimmer/>
    // }
    return listOfRestaurants.length ===0 ? (
    <Shimmer/>
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                      type="text"
                      className="search-box"
                      value={searchText}
                      onChange={(e)=>{
                        setSearchText(e.target.value);
                        // console.log(searchText);
                      }}
                    />
                    <button
                    onClick={() =>{
                       // filter the reastaurant cards and update the Ui
                      // searchText
                    //   console.log(searchText);
                    const filteredRestaurants = listOfRestaurants.filter((res) =>
                        // res.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurant?.name.includes(searchText);
                        res.info.name.toLowerCase().includes(searchText.toLowerCase()),
                     );
                     setFilteredRestaurants(filteredRestaurants);

                    }} 
                    >Search</button>
                </div>
                <button className="filter-btn"
                 onClick={() =>{
                    // filter logic here
                    const filteredList = listOfRestaurants.filter(
                        (res) =>res.info.avgRating>4.3
                    );
                    setListOfRestaurants(filteredList);
                    }}
                    
                    >
                        Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                  {filteredRestaurants.map((restaurant)=>(
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