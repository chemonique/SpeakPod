import React from "react";
import ShowSeasons from "./ShowSeasons"; // New component for show seasons

function ShowDetails({ show, currentShowId, setCurrentShowId }) {
  return (
    <div className="show-details">
      <div>
        <p>{show.description}</p>
        {currentShowId === show.id && <ShowSeasons showId={show.id} />}
        <button onClick={() => setCurrentShowId(null)}>Close</button>
      </div>
    </div>
  );
}

export default ShowDetails;
