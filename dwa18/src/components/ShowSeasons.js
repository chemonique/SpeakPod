import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import AudioPlayer from "../components/AudioPlayer";
import SortOptions from "../components/SortOptions";
import FavoriteEpisodes from "../components/FavoriteEpisodes";

function ShowSeasons({ showId }) {
  // State and useEffect hooks go here
  const [seasons, setSeasons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [playingEpisode, setPlayingEpisode] = useState(null);
  const [userConfirmation, setUserConfirmation] = useState(true);
  const [favoriteEpisodes, setFavoriteEpisodes] = useState([]);
  const [sortOrder, setSortOrder] = useState("ascending"); // ascending, descending
  const [sortType, setSortType] = useState("title"); // title, date

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://podcast-api.netlify.app/id/${showId}`
        );
        const data = await response.json();
        setSeasons(data.seasons);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching seasons:", error);
      }
    }

    fetchData();
  }, [showId, userConfirmation]);

  //   // Fetch and set user's listening history from localStorage
  //   const userHistory = JSON.parse(localStorage.getItem("userHistory")) || {};

  //   // Set playingEpisode from userHistory or null
  //   setPlayingEpisode(userHistory[showId] || null);

  //   // Prompt user before closing the page if audio is playing
  //   const handleBeforeUnload = (event) => {
  //     if (playingEpisode && userConfirmation) {
  //       event.preventDefault();
  //       event.returnValue = "";
  //     }
  //   };
  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };

  // useEffect(() => {
  //   // Update user's listening history in localStorage
  //   if (playingEpisode) {
  //     const userHistory = JSON.parse(localStorage.getItem("userHistory")) || {};
  //     setPlayingEpisode(userHistory[showId] || null);
  //   }
  // }, [playingEpisode, showId]);
  // // Reset progress and other event handlers
  // const resetProgress = () => {
  //   const userHistory = JSON.parse(localStorage.getItem("userHistory")) || {};
  //   delete userHistory[showId];
  //   localStorage.setItem("userHistory", JSON.stringify(userHistory));
  //   setPlayingEpisode(null);
  // };

  // // Functions to handle play, pause, and favorites
  // const handlePlay = (episode, timestamp) => {
  //   setPlayingEpisode({ ...episode, timestamp });
  // };

  // const handlePlayButton = (episode) => {
  //   setPlayingEpisode({
  //     episode,
  //     timestamp: 0, // Reset timestamp when starting a new episode
  //   });
  // };

  // const handlePause = () => {
  //   const audio = document.getElementById("audio-player");
  //   if (audio) {
  //     const timestamp = audio.currentTime;
  //     if (playingEpisode) {
  //       const completedEpisode = { ...playingEpisode, completed: true };
  //       setPlayingEpisode({ ...completedEpisode, timestamp });
  //       updateUserHistory(completedEpisode);
  //     }
  //   }
  // };
  // const updateUserHistory = (episode) => {
  //   const userHistory = JSON.parse(localStorage.getItem("userHistory")) || {};
  //   userHistory[showId] = episode;
  //   localStorage.setItem("userHistory", JSON.stringify(userHistory));
  // };

  const toggleFavorite = (episode) => {
    if (
      favoriteEpisodes.some(
        (favEpisode) => favEpisode.episode.episode === episode.episode
      )
    ) {
      setFavoriteEpisodes(
        favoriteEpisodes.filter(
          (favEpisode) => favEpisode.episode.episode !== episode.episode
        )
      );
    } else {
      setFavoriteEpisodes([
        ...favoriteEpisodes,
        { episode, addedAt: new Date() },
      ]);
    }
  };
  const sortedFavorites = [...favoriteEpisodes];

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleSortTypeChange = (e) => {
    setSortType(e.target.value);
  };

  // Component for displaying favorite episodes
  const fetchSeasonEpisodes = async (seasonNumber) => {
    try {
      const response = await fetch(
        `https://podcast-api.netlify.app/id/${showId}`
      );
      const data = await response.json();
      const { episodes } = data.seasons[seasonNumber - 1];

      // Create episodeList
      const episodeList = episodes.map((episode) => (
        <div key={episode.episode}>
          <p>
            Episode {episode.episode}: {episode.title}
          </p>
        </div>
      ));

      // Update the state to display the episodes
      setSeasons((prevSeasons) => {
        const updatedSeasons = [...prevSeasons];
        updatedSeasons[seasonNumber - 1].episodesList = episodeList;
        return updatedSeasons;
      });
    } catch (error) {
      console.error("Error fetching episodes:", error);
    }
  };
  const [selectedSeason, setSelectedSeason] = useState(null);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="season-dropdown">
              Select Season
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {seasons.map((season) => (
                <Dropdown.Item
                  key={season.season}
                  onClick={() => setSelectedSeason(season)}
                >
                  Season {season.season}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          {selectedSeason && (
            <div>
              <img
                src={selectedSeason.image}
                alt={`Season ${selectedSeason.season}`}
              />
              <h3>Season {selectedSeason.season}</h3>
              <h4>{selectedSeason.title}</h4>
              <p>Episodes: {selectedSeason.episodes.length}</p>
              <button
                onClick={() => fetchSeasonEpisodes(selectedSeason.season)}
              >
                View Episodes
              </button>
              {selectedSeason.episodesList &&
                selectedSeason.episodesList.map((episode) => (
                  <div key={episode.episode}>
                    <p>
                      Episode {episode.episode}: {episode.title}
                    </p>
                    {/* ... */}
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default ShowSeasons;
