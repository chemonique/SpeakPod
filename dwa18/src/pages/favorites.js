import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import FavoriteEpisodes from "../components/FavoriteEpisodes";
import SortOptions from "../components/SortOptions"; // Import the SortOptions component

function FavoriteModal() {
  const [show, setShow] = useState(true);
  const [sortOrder, setSortOrder] = useState("ascending");
  const [sortType, setSortType] = useState("title");

  const handleClose = () => {
    setShow(false);
  };

  // Sample data for favorite episodes
  const favoriteEpisodes = [
    {
      episode: 1,
      title: "Episode Title 1",
      showId: "Show 1",
      seasonNumber: 1,
      timestamp: "2023-09-01",
    },
    {
      episode: 2,
      title: "Episode Title 2",
      showId: "Show 2",
      seasonNumber: 2,
      timestamp: "2023-09-02",
    },
    // Add more episodes as needed
  ];

  // Function to sort favorite episodes based on sortType and sortOrder
  const sortFavoriteEpisodes = () => {
    const sortedEpisodes = [...favoriteEpisodes];

    if (sortType === "title") {
      sortedEpisodes.sort((a, b) => {
        if (sortOrder === "ascending") {
          return a.title.localeCompare(b.title);
        } else {
          return b.title.localeCompare(a.title);
        }
      });
    } else if (sortType === "date") {
      sortedEpisodes.sort((a, b) => {
        if (sortOrder === "ascending") {
          return a.timestamp.localeCompare(b.timestamp);
        } else {
          return b.timestamp.localeCompare(a.timestamp);
        }
      });
    }

    return sortedEpisodes;
  };

  return (
    <>
      <Modal show={show} fullscreen onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Favorite Episodes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SortOptions
            sortOrder={sortOrder}
            sortType={sortType}
            handleSortChange={(e) => setSortOrder(e.target.value)}
            handleSortTypeChange={(e) => setSortType(e.target.value)}
          />
          <FavoriteEpisodes favoriteEpisodes={sortFavoriteEpisodes()} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FavoriteModal;
