import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";

import classes from "./ShowSeasons.module.css";
import SeasonEpisodes from "./ShowEpisodes";
import AudioPlayer from "../components/AudioPlayer";
import SortOptions from "../components/SortOptions";
import FavoriteEpisodes from "../components/FavoriteEpisodes";

function ShowSeasons({ showId }) {
  // State and useEffect hooks go here
  const [seasons, setSeasons] = useState([]);
  const [showEpisodes, setShowEpisodes] = useState(false);
  const [epiShowId, setEpiShowId] = useState(null);

  const [selectedSeason, setSelectedSeason] = useState(null);
  const [userConfirmation, setUserConfirmation] = useState(true);
  const [loading, setLoading] = useState(true);
  // const [playingEpisode, setPlayingEpisode] = useState(null);

  // const [favoriteEpisodes, setFavoriteEpisodes] = useState([]);
  // const [sortOrder, setSortOrder] = useState("ascending"); // ascending, descending
  // const [sortType, setSortType] = useState("title"); // title, date

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

  // const handleSortChange = (e) => {
  //   setSortOrder(e.target.value);
  // };

  // const handleSortTypeChange = (e) => {
  //   setSortType(e.target.value);
  // };

  // Component for displaying favorite episodes

  const fetchSeasonEpisodes = (showId) => {
    setShowEpisodes(true);
    setEpiShowId(showId);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Dropdown className={classes.optionSeason}>
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
            <div className={classes.showseasons}>
              <img
                src={selectedSeason.image}
                alt={`Season ${selectedSeason.season}`}
                className={classes.image}
              />

              <div className={classes.details}>
                <h3>Season {selectedSeason.season}</h3>
                <h4>{selectedSeason.title}</h4>
                <p>Episodes: {selectedSeason.episodes.length}</p>
              </div>
              {showEpisodes ? (
                <SeasonEpisodes
                  showId={showId}
                  seasonNumber={selectedSeason.season}
                />
              ) : (
                <button
                  onClick={() =>
                    fetchSeasonEpisodes(showId, selectedSeason.season)
                  }
                >
                  View Episodes
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default ShowSeasons;
