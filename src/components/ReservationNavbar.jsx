import React, { useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dobby from "../assets/images/Wizard/dobby.svg";

function ReservationNavbar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="ReservationNavbar">
      <div className="planet-page-title">Wizard</div>
      <div className="planet-page-button-reservation">
        <button
          className="planet-page-button"
          type="button"
          onClick={handleOpenModal}
        >
          Reservation
        </button>
      </div>
      <div className="planet-page-guide">
        <div className="planet-page-guide-name">Dobby</div>
        <img src={dobby} alt="dobby" className="planet-page-guide-img" />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "transparent",
          },
          content: {
            position: "absolute",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            background: "transparent",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }}
      >
        <div className="datePicPopup">
          <button
            className="btn-return"
            type="button"
            onClick={handleCloseModal}
          >
            X
          </button>
          <h2>Chose your date</h2>
          <DatePicker selected={selectedDate} onChange={handleDateChange} />
          <button className="btn-submit" onClick={handleCloseModal}>
            Booked
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default ReservationNavbar;
