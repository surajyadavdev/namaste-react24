import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import resList from "./utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () =>{
    // state varible - super powerful variable 
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const[filteredRestaurants,setFilteredRestaurants] =useState([]);
    const [searchText,setSearchText] =useState("");
    // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    // Whenever state variables upadte,react triggers a reconciliation cyle(re-renders the component )
    console.log("Body Rendered",listOfRestaurants);
    useEffect(() =>{
        // console.log("use effect called ");
        fetchData();
    },[]);

    const fetchData = async()=>{
        // console.log("hi");
        try{
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            console.log(data);
            if (!data.ok) {
                throw new Error('Failed to fetch data');
            }
            const json = await data.json();
            setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            } catch (error){
                console.error('Error fetching data:', error);
            }

    }
    // conditional rendering 
    // if(listOfRestaurants.length ===0){
    //     // return <h1>Loading.......</h1>
    //     return <Shimmer/>
    // }
    const onlineStatus = useOnlineStatus();// get online status;
    if(onlineStatus === false) return(
    <h1>
    Looks like you are Offline !! Please check your internet connection
    </h1>
    );
    console.log("length error",listOfRestaurants);
    if (!Array.isArray(listOfRestaurants)) {
        console.error("Expected listOfRestaurants to be an array, but got:", listOfRestaurants);
        return <Shimmer />;
    }

    return listOfRestaurants.length === 0 ? (
    <Shimmer/>
    ) : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input 
                      type="text"
                      className="border border-solid border-black"
                      value={searchText}
                      onChange={(e)=>{
                        setSearchText(e.target.value);
                        // console.log(searchText);
                      }}
                    />
                    <button className="px-4 py-2 bg-green-100 mx-4 rounded-lg"
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
                
                <div className="search m-4 p-4 flex items-center ">
                <button className="px-4 py-2 bg-gray-100 rounded-lg"
                 onClick={() =>{
                    // filter logic here
                    console.log("clicked");
                    const filteredList = listOfRestaurants.filter(
                        (res) =>res.info.avgRating>4.3
                    );
                    // console.log(filteredList);
                    // setListOfRestaurants(filteredList);
                    setFilteredRestaurants(filteredList)
                    }}
                    
                    >
                        Top Rated Restaurants
                </button>
                </div>
            </div>
            {/* console.log(filteredRestaurants); */}
            <div className="flex flex-wrap">
                  {filteredRestaurants.map((restaurant)=>(
                    <Link
                    key={restaurant.info.id}
                    to={"/restaurants/" + restaurant.info.id}
                    >
                        {/* {restaurant.data.promoted ? (
                            <RestaurantCardPromoted resData={restaurant} />
                        ) : (
                            <RestaurantCard resData={restaurant}/>
                        )}
                        <RestaurantCard  resData={restaurant}/> */}
                        <RestaurantCard resData={restaurant}/>
                    </Link>
                  ))}
                  {/* {resList.map((restaurant,index)=>(
                  <RestaurantCard key={index} resData={restaurant}/>
                  ))} */}
            </div>
        </div>
    )
};

export default Body;