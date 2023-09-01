import React from "react";
import genre_mapping from "./Genre";
import classes from "./GenreButton.module.css";

function GenreButtons({ selectedGenre, setSelectedGenre }) {
  return (
    <div className={classes.list}>
      {Object.entries(genre_mapping).map(([genreId, genreTitle]) => (
        <button
          key={genreId}
          className={`${classes.button} ${
            selectedGenre === genreId ? "selected" : ""
          }`}
          onClick={() =>
            setSelectedGenre(selectedGenre === genreId ? null : genreId)
          }
        >
          {genreTitle}
        </button>
      ))}
    </div>
  );
}

export default GenreButtons;
