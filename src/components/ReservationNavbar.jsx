import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
<<<<<<< HEAD
=======

function ReservationNavbar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isBooked, setIsBooked] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setIsBooked(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
>>>>>>> 99a692be21c0432a7bc0c6756715c7bbb0220305

  const handleBooking = () => {
    setIsBooked(true);
    setTimeout(() => {
      handleCloseModal();
    }, 3000);
  };

  useEffect(() => {
    if (isBooked) {
      setTimeout(() => {
        handleCloseModal();
      }, 3000);
    }
  }, [isBooked]);

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
<<<<<<< HEAD

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
=======
>>>>>>> 99a692be21c0432a7bc0c6756715c7bbb0220305

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
          {isBooked ? (
            <p>Holidays booked!</p>
          ) : (
            <button className="btn-submit" onClick={handleBooking}>
              Booked
            </button>
          )}
        </div>
      </Modal>
    </div>
  );
}
export default ReservationNavbar;
