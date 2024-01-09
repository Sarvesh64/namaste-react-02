import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/mockData";
import { resList } from "../utils/mockData";
import { useState } from "react";


const Body = () => {

    //Local State Variable - Super powerfull variable
    const [listOfRestaurants, setlistOfRestaurants] = useState(resList);

    //Normal JS Variable
    //let listOfRestaurants = [];
    
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={() => {
                    // Filter Logic here
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.data.avgRating > 4
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
                        <RestaurantCard key = {restaurant.data.id} resName = {restaurant}/>
                    ))
                }

            </div>
        </div>
    )
};

export default Body;