import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/mockData";
import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANTS_LIST_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //Local State Variable - Super powerfull variable
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [listOfFilteredRestaurants, setlistOfFilteredRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");
  //Normal JS Variable
  //let listOfRestaurants = [];

  //Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  console.log("body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_LIST_URL);
    const json = await data.json();
    console.log(" response " + json?.data?.cards[4]);
    // Optional Chaining
    setlistOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setlistOfFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditional Rendering
  // if(listOfRestaurants.length === 0){
  //     return <Shimmer />;
  // }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false)
    return (
      <h1>Looks like you're offline!! PLease check your internet connection</h1>
    );
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex ">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 ml-6 bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
            onClick={() => {
              //Filter the restaurant cards and update the UI
              //search text
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setlistOfFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
         <div className="m-4 p-4 flex item-center"> 
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg  hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
            onClick={() => {
              // Filter Logic here
              const filteredList = listOfRestaurants.filter(
                (res) => res?.info?.avgRating > 4
              );
              setlistOfFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* <RestaurantCard resName = {resData}/>
                <RestaurantCard resName = {resList[2]}/>
                <RestaurantCard resName = {resList[4]}/>
                <RestaurantCard resName = {resList[5]}/> */}
        {listOfFilteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resName={restaurant?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
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
