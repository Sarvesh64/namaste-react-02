
import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor:"#f0f0f0"
}

const RestaurantCard = (props) => {
    const {resName} = props;

    const{cloudinaryImageId,name, avgRating, cuisines, costForTwo, deliveryTime} = resName?.data;
    return(
        <div className="res-card" style={styleCard}>
            <img 
            className="res-logo"
            alt="res-logo"
            src={
          CDN_URL +
          resName.data.cloudinaryImageId
        }/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>₹{costForTwo/100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}
// not using keys( not acceptable) <<<<<< index as key  <<<<<<<<<< unique id(best practice)

export default RestaurantCard;