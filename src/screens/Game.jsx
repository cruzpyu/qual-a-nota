import { useState, useEffect } from "react";
import { Howl } from "howler";
import { useSpring, animated } from "react-spring";
import { Modal } from "../components/Modal/Modal";
import { notes, shakeAnimation } from "../utils/game-utils";
import {
  HandImage,
  Box,
  NoteButtonsBox,
  ColumnBox,
  Container,
  Title,
  Button,
} from "../styles/app";
import BaseButton from "../components/BaseButton/BaseButton";

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
    color: "#B04759",
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
      `Você acertou! A nota correta era ${currentImage?.note?.name.replace(
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
    setErrorMessage("Você errou! Continue tentando...");
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
      <ColumnBox
        key={noteName}
        style={{
          gap: "10px",
        }}
      >
        <HandImage
          src={`images/notes/${noteName}.jpeg`}
          alt={imageDescription}
        />
        <Box>
          <BaseButton
            onClick={handleReloadButtonClick}
            source={"icons/refresh.png"}
            label="mudar nota"
            hasIcon
          />
          <BaseButton
            onClick={() => new Audio(`/sounds/${soundFile}`).play()}
            source={"icons/volume.png"}
            label="ouvir nota"
            hasIcon
          />
        </Box>
        {errorMessage && (
          <animated.p style={feedbackStyle}>{errorMessage}</animated.p>
        )}
        {openModal && (
          <Modal
            onClick={() => setOpenModal(false)}
            feedback={successMessage}
          />
        )}
      </ColumnBox>
    );
  };
  useEffect(() => {
    generateNewImage();
  }, [round]);

  const renderButtons = () => {
    const validNoteNames = ["dó", "ré", "mi", "fá", "sol", "lá", "si"];
    const validNotes = notes.filter((note) =>
      validNoteNames.includes(note.name)
    );

    return (
      <NoteButtonsBox>
        {validNotes.map((note) => (
          <Button
            style={{ color: "#646cff" }}
            key={note.name}
            onClick={() => handleButtonClick(note.name)}
            aria-label={note.name.replace(/\d+/g, "")}
          >
            {note.name.replace(/\d+/g, "").toUpperCase()}
          </Button>
        ))}
      </NoteButtonsBox>
    );
  };

  return (
    <Container>
      <Title>Qual é a nota?</Title>
      <Box>
        <p>acertos: {hits}</p>
        <p>erros: {errors}</p>
      </Box>
      {currentImage ? renderImages() : "Carregando imagem..."}

      {renderButtons()}
      <BaseButton
        source="icons/arrow.png"
        ariaLabel="voltar para tela inicial"
        path="/"
        label="home"
        style={{ alignSelf: "flex-start", paddingLeft: "30px" }}
        hasIcon
      />
    </Container>
  );
};

export default Game;
