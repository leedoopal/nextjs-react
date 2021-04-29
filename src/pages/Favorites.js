import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
  const favoritesContext = useContext(FavoritesContext);

  let content;

  if (favoritesContext.totalFavorites === 0) {
    content = <p>좋아하는 아이템이 없어요!</p>
  } else {
    content = <MeetupList meetups={favoritesContext.favorites}/>
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  )
}

export default FavoritesPage;
