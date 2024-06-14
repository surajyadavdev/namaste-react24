import { CDN_URL } from "../utils/constant";

const ItemList  = ({items,dummy})=>{
    // console.log(items);
    console.log("dummy Item:",dummy);
    return(
        <div>
            {items.map(item=>(
            <div key={item.card.info.id} className="p-2 m-2 border-grey-200 border-b-2flex text-left flex justify-between">
                <div className="w-9/12" >
                    <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span>
                                - ₹{" "}
                                {item.card.info.price 
                                ? item.card.info.price/100
                                : item.card.info.defaultPrice/100}
                            </span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className=" relative w-3/12 p-4">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 ">
                        <button className="p-2 bottom-0 left-1/2 rounded-lg bg-white text-green-500  shadow-lg fony-bold ">ADD</button>
                        </div>
                        <img src={CDN_URL+ item.card.info.imageId} className="w-full"/>
                    </div>
                </div>
        ))}
        </div>
    );
};

export default ItemList;