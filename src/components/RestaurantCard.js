import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) =>{
    // const RestaurantCard = ({resName,cusine}) =>{
    const { resData } = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info;// destructuring
    const {deliveryTime} = resData?.info?.sla;

    // console.log(props);//
    return(
        <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img 
            className="rounded-lg"
            alt="res-logo"
            src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime + " Minutes"}</h4>
        </div>
    )
};

// Higher Order Componenet 
// input - RestaurantCard    ===> REstaurantCardPromoted 
 export const withPromotedLabel = (RestaurantCard)=>{
    return (props) =>{
        return (
            <div>
                <label className="absolute bg-black text-white w-2 p-2 rounded-lg">
                    Promoted
                </label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}
export default RestaurantCard;