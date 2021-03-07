import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

const Favorites = () => {
  const favContext = useContext(FavoritesContext);

  let content;
  if (favContext.totalFavorites === 0) {
    content = <p>You dont have any favorite meetup, add some?</p>;
  } else {
    content = <MeetupList meetups={favContext.favorites} />;
  }

  return (
    <section>
      <h1> My Favorites Meetup</h1>
      {content}
    </section>
  );
};

export default Favorites;
