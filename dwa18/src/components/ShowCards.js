import React from "react";
import ShowSeasons from "./ShowSeasons"; // New component for show seasons
import Modal from "./Modal";

import genre_mapping from "./Genre/Genre";

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
            {currentShowId === show.id && (
              <Modal
                showId={show.id}
                img={show.image}
                title={show.title}
                description={show.description}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowCard;
