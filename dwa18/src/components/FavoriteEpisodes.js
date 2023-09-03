import React from "react";

function FavoriteEpisodes({ favoriteEpisodes }) {
  return (
    <div>
      {favoriteEpisodes.map((favEpisode) => (
        <div key={favEpisode.episode}>
          <p>
            Episode {favEpisode.episode}: {favEpisode.title}
          </p>
          <p>
            Show: {favEpisode.showId}, Season: {favEpisode.seasonNumber}
          </p>
          <p>Added on: {favEpisode.timestamp}</p>
        </div>
      ))}
    </div>
  );
}

export default FavoriteEpisodes;
