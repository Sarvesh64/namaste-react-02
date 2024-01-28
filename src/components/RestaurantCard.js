import { CDN_URL } from "../utils/constants";

const styleCard = {
    //backgroundColor:"#f0f0f0"
}

const RestaurantCard = (props) => {
    const {resName} = props;
    const{cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla} = resName;

    return (
      <div
        className="m-4 w-[250px] rounded-xl hover:border-transparent transform motion-safe:hover:scale-95 duration-300"
        style={styleCard}
      >
        <img
          className="rounded-xl"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold py-3 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
    );
}
// not using keys( not acceptable) <<<<<< index as key  <<<<<<<<<< unique id(best practice)

export default RestaurantCard;