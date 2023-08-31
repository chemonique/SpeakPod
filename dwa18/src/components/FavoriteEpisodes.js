import React from "react";

function FavoriteEpisodes({ favoriteEpisodes }) {
  return (
    <div>
      <h2>Your Favorite Episodes</h2>
      {favoriteEpisodes.map((favEpisode) => (
        <div key={favEpisode.episode.episode}>
          <p>
            Episode {favEpisode.episode.episode}: {favEpisode.episode.title}{" "}
            (Added on: {favEpisode.addedAt.toLocaleString()})
          </p>
        </div>
      ))}
    </div>
  );
}

export default FavoriteEpisodes;
