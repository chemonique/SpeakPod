import React, { useEffect, useState } from "react";

function SeasonEpisodes({ showId, seasonNumber }) {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSeasonEpisodes(showId, seasonNumber);
  }, [showId, seasonNumber]);

  const fetchSeasonEpisodes = async (showId, seasonNumber) => {
    try {
      const response = await fetch(
        `https://podcast-api.netlify.app/id/${showId}`
      );
      const data = await response.json();
      const { episodes } = data.seasons[seasonNumber - 1];
      setEpisodes(episodes);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching episodes:", error);
    }
  };

  const toggleFavorite = (episodeNumber) => {
    // Implement your toggleFavorite function logic here
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {episodes.map((episode) => (
        <div key={episode.episode}>
          <p>
            Episode {episode.episode}: {episode.title}
          </p>
          <audio controls>
            <source src={episode.file} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          {/* <button onClick={() => toggleFavorite(episode.episode)}>
            Back to Show
          </button> */}
        </div>
      ))}
    </div>
  );
}

export default SeasonEpisodes;
