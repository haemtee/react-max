import { useContext } from "react";
import Card from "../ui/Card";
import style from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";

const MeetupItem = (props) => {
  const favContext = useContext(FavoritesContext);

  const isFavoriteItem = favContext.itemIsFavorite(props.id);
  console.log(isFavoriteItem);
  console.log(favContext.favorites);

  function favoriteToggleHandler() {
    if (isFavoriteItem) {
      favContext.removeFavorite(props.id);
    } else {
      favContext.addFavorite({
        id: props.id,
        image: props.image,
        title: props.title,
        address: props.address,
        description: props.description,
      });
    }
  }

  return (
    <li className={style.item}>
      <Card>
        <div className={style.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={style.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={style.actions}>
          <button onClick={favoriteToggleHandler}>
            {isFavoriteItem ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
