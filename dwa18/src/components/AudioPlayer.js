import React, { useState, useEffect } from "react";

function AudioPlayer({
  playingEpisode,
  handlePlay,
  handlePause,
  resetProgress,
  saveProgress,
}) {
  // Use local state to track the current playback time and episode duration
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const audioPlayer = document.getElementById("audio-player");
    if (audioPlayer) {
      audioPlayer.addEventListener("timeupdate", () => {
        setCurrentTime(audioPlayer.currentTime);
      });
      audioPlayer.addEventListener("durationchange", () => {
        setDuration(audioPlayer.duration);
      });
      audioPlayer.addEventListener("playing", () => {
        setShowModal(true);
      });
      audioPlayer.addEventListener("pause", () => {
        setShowModal(false);
      });

      // Ensure currentTime and duration are set initially
      setCurrentTime(audioPlayer.currentTime);
      setDuration(audioPlayer.duration);
    }

    return () => {
      // Cleanup event listeners
      if (audioPlayer) {
        audioPlayer.removeEventListener("timeupdate", () => {});
        audioPlayer.removeEventListener("durationchange", () => {});
        audioPlayer.removeEventListener("playing", () => {});
        audioPlayer.removeEventListener("pause", () => {});
      }
    };
  }, []);
  // Handle playback progress and save progress when the user stops listening
  const handleStop = () => {
    saveProgress(playingEpisode.episode, currentTime);
    handlePause();
  };

  // Function to handle modal confirmation
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Format seconds as a timestamp (hh:mm:ss)
  const formatTimestamp = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  return (
    <div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure you want to close the audio player?</p>
            <button onClick={handleCloseModal}>Cancel</button>
          </div>
        </div>
      )}
      <audio
        id="audio-player"
        controls
        onPlay={() =>
          handlePlay(playingEpisode.episode, playingEpisode.timestamp)
        }
        onPause={handleStop}
        src={playingEpisode.episode.file}
        type="audio/mpeg"
      />
      <p>
        Listening: Episode {playingEpisode.episode.episode}, Timestamp:{" "}
        {formatTimestamp(currentTime)} / {formatTimestamp(duration)}
      </p>
      <button onClick={resetProgress}>Reset Progress</button>
    </div>
  );
}

export default AudioPlayer;
