import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
const RestaurantMenu = () =>{
    // const[resInfo,setResInfo] = useState(null);
    const {resId} = useParams();
    // const params = useParams();

    // Custom hooks 
    const resInfo = useRestaurantMenu(resId);
    console.log(resId);
    console.log(resInfo);


if (resInfo === null) return <Shimmer/>;

const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
console.log(itemCards);
return(
  <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines?.join(",")} - {costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
          {itemCards.map((item) => (
              <li key={item.card.info.id}>
                  {item.card.info.name} -{" Rs."}
                  {item.card.info.price/100 || item.card.info.defaultPrice/100} 
              </li>
          ))}
      </ul>
  </div>
);
};

export default RestaurantMenu;


    
    


