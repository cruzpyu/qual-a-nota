import { useState, useEffect } from "react";
import { Howl } from "howler";
import { useSpring, animated } from "react-spring";
import { Modal } from "../components/Modal/Modal";
import { notes, shakeAnimation } from "../utils/game-utils";
import { Link } from "react-router-dom";

const Game = () => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);
  const [hits, setHits] = useState(0);
  const [errors, setErrors] = useState(0);
  const [round, setRound] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const [feedbackStyle, setFeedbackStyle] = useSpring(() => ({
    transform: "scale(1)",
    color: "red",
  }));

  const generateNewImage = () => {
    const newImages = [];
    const randomNote = notes[Math.floor(Math.random() * notes.length)];
    newImages.push({ note: randomNote });
    setImages(newImages);
    setCurrentImage(newImages[0]);
  };

  const handleCorrectAnswer = () => {
    const newImages = images.map((image) =>
      image.note === currentImage.note ? { ...image } : image
    );
    new Howl({ src: ["sounds/success.mp3"] }).play();
    setImages(newImages);
    setHits(hits + 1);
    setRound(round + 1);
    setOpenModal(true);
    setSuccessMessage(
      `Parabéns, você acertou! A nota correta era ${currentImage?.note?.name.replace(
        /2/,
        ""
      )}!`
    );
    setErrorMessage("");
  };

  const handleWrongAnswer = () => {
    new Howl({ src: ["sounds/error.mp3"] }).play();
    setFeedbackStyle(shakeAnimation);
    setErrors(errors + 1);
    setErrorMessage("Você errou! Continue tentando... (:");
  };

  const handleButtonClick = (note) => {
    if (note === currentImage?.note?.name.replace(/2/, "")) {
      handleCorrectAnswer();
    } else {
      handleWrongAnswer();
    }
  };

  const handleReloadButtonClick = () => {
    setImages([]);
    setHits(0);
    setErrors(0);
    setCurrentImage(null);
    setRound(round + 1);
    setErrorMessage("");
  };

  const renderImages = () => {
    const noteFile = currentImage.note.file;
    const noteName = currentImage.note.name;
    const imageDescription = currentImage.note.alt;
    const soundFile = noteFile + ".wav";

    return (
      <div
        key={noteName}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <img
          src={`images/${noteName}.jpeg`}
          alt={imageDescription}
          style={{
            width: "80%",
            borderRadius: "10px",
          }}
        />
        <div style={{ justifyContent: "space-between" }}>
          <button onClick={handleReloadButtonClick}>
            <img src="images/refresh.png" style={{ width: "20px" }} />
          </button>
          <button onClick={() => new Audio(`/sounds/${soundFile}`).play()}>
            <img src="images/volume.png" style={{ width: "20px" }} />
          </button>
        </div>
        <p>qual a nota?</p>
        {errorMessage && (
          <animated.p style={feedbackStyle}>{errorMessage}</animated.p>
        )}
        {openModal && (
          <Modal
            onClick={() => setOpenModal(false)}
            feedback={successMessage}
          />
        )}
      </div>
    );
  };
  useEffect(() => {
    generateNewImage();
  }, [round]);

  const renderButtons = () => {
    const validNoteNames = ["do", "re", "mi", "fa", "sol", "la", "si"];
    const validNotes = notes.filter((note) =>
      validNoteNames.includes(note.name)
    );

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {validNotes.map((note) => (
          <button key={note.name} onClick={() => handleButtonClick(note.name)}>
            {note.name.replace(/\d+/g, "")}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
        <p>Acertos: {hits}</p>
        <p>Erros: {errors}</p>
      </div>
      {currentImage ? renderImages() : "Carregando imagem..."}

      {renderButtons()}
      <div>
        <Link to="/">Voltar</Link>
      </div>
    </div>
  );
};

export default Game;
