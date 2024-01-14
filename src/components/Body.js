import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/mockData";
import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";


const Body = () => {

    //Local State Variable - Super powerfull variable
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);

    //Normal JS Variable
    //let listOfRestaurants = [];
    
    useEffect(()=>{
        fetchData();
    },[]);
    console.log("body Rendered");

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.397289&lng=85.398697&is-seo-homepage-enabled=false&page_type=DESKTOP_WEB_LISTING"
            //"https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D13.0035068%26lng%3D77.5890953%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
            //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.397289&lng=85.398697&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
        const json = await data.json();
        console.log(" response "+ json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
        setlistOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={() => {
                    // Filter Logic here
                    const filteredList = listOfRestaurants.filter(
                        (res) => res?.info?.avgRating > 4
                    );
                    setlistOfRestaurants(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {/* <RestaurantCard resName = {resData}/>
                <RestaurantCard resName = {resList[2]}/>
                <RestaurantCard resName = {resList[4]}/>
                <RestaurantCard resName = {resList[5]}/> */}
                {
                    listOfRestaurants.map((restaurant) =>(
                        <RestaurantCard key = {restaurant?.info?.id} resName = {restaurant?.info}/>
                    ))
                }
            </div>
        </div>
    )
};

export default Body;


// import RestaurantCard from "./RestaurantCard";
// import { useState, useEffect } from "react";
// const Body = () => {
//     const [listOfRestaurants, setListOfRestaurants] = useState([]);

//     useEffect(()=>{
//             fetchData();
//         },[]);

//     const fetchData = async () =>{
//         const data = await fetch(
//             "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.397289&lng=85.398697&is-seo-homepage-enabled=false&page_type=DESKTOP_WEB_LISTING"
//             );

//         const json = await data.json();
//         console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//         listOfRestaurants.map((restaurant) => (
//             //<RestaurantCard key={restaurant?.info?.id} resData = {restaurant}/>
//             console.log("ID " + restaurant?.info?.name)
//           ))
//         setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     };

//     return(
//         <div>
//             <div className="filter">
//                 <button className="filter-btn" 
//                 onClick={()=>{console.log("button clicked")
//                 const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating>4.5);
//                 setListOfRestaurants(filteredList);
//             }}
//                 >Top Rated</button>
//             </div>
//             <div className="restaurant-container">
            
//                 {listOfRestaurants.map((restaurant) => (
//                   <RestaurantCard key={restaurant?.info?.id} resData = {restaurant?.info}/>
                  
//                 ))}
//             </div> 
//         </div>
//     )
// };

// export default Body;

