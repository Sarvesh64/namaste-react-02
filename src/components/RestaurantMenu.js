import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
const [resInfo, setResInfo] = useState(null);
const {resId} = useParams();
    console.log(resId);
    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch
        (
            MENU_URL + resId
        );
        const json = await data.json();

        console.log(json?.data.cards[0]?.card?.card?.info);
        setResInfo(json.data);
    };

    if(resInfo == null){
        return <Shimmer/>;
    }

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    // const cuisines = resInfo?.cards[0]?.card?.card?.info.cuisines;
    // const costForTwoMessage = resInfo?.cards[0]?.card?.card?.info.costForTwoMessage;
    // const name = resInfo?.cards[0]?.card?.card?.info.name;

    const {itemCards} = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    return(
        <div>
            <h1>{name}</h1>
            <h2>{cuisines}</h2>
            <h2>{costForTwoMessage}</h2>
            <ul>
                {itemCards.map((item) => (<li>{item.card.info.name} - {"Rs. "} {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                </li>))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;