import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) =>{
    // const RestaurantCard = ({resName,cusine}) =>{
    const { resData } = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info;// destructuring
    const {deliveryTime} = resData?.info?.sla;

    // console.log(props);//
    return(
        <div className="res-card" style={{
            backgroundColor:"#f0f0f0"
        }}>
            <img 
            className="res-logo"
            alt="res-logo"
            src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime + " Minutes"}</h4>
        </div>
    )
};
export default RestaurantCard;