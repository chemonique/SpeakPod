import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import ShowSeasons from "./ShowSeasons";

function SeasonModal({ showId, img, title, description }) {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(true);

  //   function handleShow(breakpoint) {
  //     setFullscreen(breakpoint);
  //     setShow(true);
  //   }

  return (
    <>
      {values.map(
        (v, idx) => typeof v === "string" && `below ${v.split("-")[0]}`
      )}
      <Modal show={show} fullscreen onHide={() => setShow(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {console.log(showId)}
          <img src={img} alt={title} />
          <h2 className="title">{title}</h2>
          <p>{description}</p>
          <ShowSeasons showId={showId} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SeasonModal;
