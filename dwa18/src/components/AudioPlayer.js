import React from "react";

function AudioPlayer({
  playingEpisode,
  handlePlay,
  handlePause,
  resetProgress,
}) {
  return (
    <div>
      <audio
        id="audio-player"
        controls
        onPlay={() =>
          handlePlay(playingEpisode.episode, playingEpisode.timestamp)
        }
        onPause={handlePause}
        src={playingEpisode.episode.file}
        type="audio/mpeg"
      />
      <p>
        Listening: Episode {playingEpisode.episode.episode}, Timestamp:{" "}
        {Math.floor(playingEpisode.timestamp / 60)}:
        {String(Math.floor(playingEpisode.timestamp % 60)).padStart(2, "0")}
      </p>
      <button onClick={resetProgress}>Reset Progress</button>
    </div>
  );
}

export default AudioPlayer;
