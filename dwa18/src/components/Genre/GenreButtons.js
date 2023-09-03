import React from "react";
import genre_mapping from "./Genre";
import classes from "./GenreButton.module.css";

function GenreButtons({ selectedGenre, setSelectedGenre, filterByGenre }) {
  return (
    <div className={classes.list}>
      {Object.entries(genre_mapping).map(([genreId, genreTitle]) => (
        <button
          key={genreId}
          className={`${classes.button} ${
            selectedGenre === genreId ? "selected" : ""
          }`}
          onClick={() => filterByGenre(genreId)}
        >
          {genreTitle}
        </button>
      ))}
    </div>
  );
}

export default GenreButtons;
