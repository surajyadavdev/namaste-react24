import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";


const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
import UserContext from "./utils/UserContext";

const AppLayout = () =>{
    const[userName,setUserName] = useState();

    //authentication
    useEffect(()=>{
        //Make an APi call and send username and password
        const data = {
            name:"Suraj Yadav",
        };
        setUserName(data.name);
    },[])
    return (
        <UserContext.Provider value = {{loggedInUser:userName}}>
            <div className="app">
            <UserContext.Provider value = {{loggedInUser:"Elon Musk"}}>
                <Header/>
            </UserContext.Provider>
                <Outlet/>
            </div>
        </UserContext.Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/ >,
        children: [
            {
              path: "/",
              element: <Body/>
            },
            // {
            //     path: "/about",
            //     element: (
            //         <Suspense fallback={<h1>Loading...</h1>}>
            //             <About />
            //         </Suspense>
            //     )
            // },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <About />
                    </Suspense>
                )
            },
            {
                path:"/contact",
                element:<Contact/>,
            }, 
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading .....</h1>}><Grocery/></Suspense>,
            },
                 
            {
              // resid will be dynamically change for different restaurant it will be different
              path:"/restaurants/:resId",
              element:<RestaurantMenu/>,
          },
                 
        ],
        errorElement:<Error/>
    },
   
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)

