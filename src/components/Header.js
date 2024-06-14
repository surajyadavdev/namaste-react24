import { LOGO_URL } from "../utils/constant";
import { useEffect, useState,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserConext from "../utils/UserContext";


const Header = () =>{
    const[btnNameReact,setBtnNameReact] = useState("Login");
    const onlineStatus =  useOnlineStatus();
    // const data = useContext(UserConext);
    //destructuring 
    const {loggedInUser} = useContext(UserConext);


    // console.log("header rendered");
    // if no dependency array =>useEffect is called on every render
    // if dependency array is empty=[] => useEffect is called on initial render(just once)
    // if dependency arrray is [btnNameReact] => called everytime btnNameReact is updated .
    useEffect(()=>{
        // console.log("useEffect Called ");
    })
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg ">
            <div className="logo-container">
                <img 
                    className ="w-56"
                    src={LOGO_URL}
                />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4">
                        Online Status:{onlineStatus? "✔":"🔴"}
                    </li>
                    <li className="px-4">
                            <Link to= "/">Home</Link>
                    </li>
                    <li className="px-4" >
                        <Link to= "/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to = "/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to = "/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button className="login"
                    onClick={() =>{
                        btnNameReact === "Login"
                        ? setBtnNameReact("Logout")
                        : setBtnNameReact("Login")
                    }}
                    >
                        {btnNameReact}
                    </button>
                    {/* <li className="px-4">{data.loggedInUser}</li > */}
                    <li className="px-4 font-bold">{loggedInUser}</li >


                </ul>
            </div>
        </div>
    )
};

export default Header;