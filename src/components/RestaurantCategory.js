import {useState} from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data,showItems,setShowIndex,dummy})=>{
    // const [showItems,setShowItems] = useState(false);
    // console.log("dummy cate",dummy);


    const handleClick = ()=>{
        setShowIndex();
     };
    // console.log(data);
    return(
        <diV>
            {/* Header */}
            <div className="w-6/12 m-auto mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div 
                className="flex justify-between cursor-pointer"
                onClick={handleClick}
                >
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>🔽</span>
                </div>
                

                {showItems && <ItemList items ={data.itemCards} dummy={dummy}/>}

            </div>
            {/* Accordion Body */}

        </diV>
);
};
export default RestaurantCategory;