import React from "react";
import ShowSeasons from "./ShowSeasons"; // New component for show seasons

import genre_mapping from "./Genre";

function ShowCard({
  show,
  selectedGenre,
  fetchShowDetails,
  currentShowId,
  setCurrentShowId,
}) {
  return (
    <div className="card_item" key={show.id}>
      <img src={show.image} alt={show.title} />
      <h2 className="title">{show.title}</h2>
      <p>
        Genres:{" "}
        {show.genres
          .map((selectedGenre) => genre_mapping[selectedGenre])
          .join(", ")}
      </p>
      <p>Seasons: {show.seasons}</p>
      <p>Last Updated: {new Date(show.updated).toLocaleDateString()}</p>
      <button className="seeMore" onClick={() => fetchShowDetails(show.id)}>
        View Details
      </button>
      {currentShowId === show.id && (
        <div className="show-details">
          <div>
            {currentShowId === show.id && <ShowSeasons showId={show.id} />}
            <button onClick={() => setCurrentShowId(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowCard;
