import React from "react";
import genre_mapping from "./Genre";

function GenreButtons({ selectedGenre, setSelectedGenre }) {
  return (
    <div className="genre-list">
      {Object.entries(genre_mapping).map(([genreId, genreTitle]) => (
        <button
          key={genreId}
          className={`genre-button ${
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
