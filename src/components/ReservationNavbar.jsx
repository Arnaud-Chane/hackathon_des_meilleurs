import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ReservationNavbar() {
  const [dataWorld, setDataWorld] = useState([]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("dataWorld"));
    if (data) {
      setDataWorld(...data);
    }
  }, []);

  const ecriture = function (lettre, nombre) {
    if (nombre < lettre.length) {
      setTimeout(() => {
        setDescription((prevDesc) => prevDesc + lettre[nombre]);
        ecriture(lettre, nombre + 1);
      }, 20);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      ecriture(dataWorld.description, 0);
    }, 1000);
  }, [dataWorld.description]);

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
      <div className="planet-page-title">{dataWorld.path}</div>
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
        <div className="planet-page-guide-name">{dataWorld.guide_name}</div>
        <img
          src={dataWorld.guideImg}
          alt={dataWorld.guide_name}
          className="planet-page-guide-img"
        />
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
