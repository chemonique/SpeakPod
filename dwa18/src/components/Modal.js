import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import classes from "./Modal.module.css";

import ShowSeasons from "./ShowSeasons";

function SeasonModal({ showId, img, title, description }) {
  const values = [true];
  // const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(true);

  return (
    <>
      {values.map(
        (v, idx) => typeof v === "string" && `below ${v.split("-")[0]}`
      )}
      <Modal show={show} fullscreen onHide={() => setShow(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className={classes.modal}>
          <img src={img} alt={title} className={classes.image} />
          <h2 className={classes.title}>{title}</h2>
          <p className={classes.description}>{description}</p>
          <ShowSeasons showId={showId} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SeasonModal;
