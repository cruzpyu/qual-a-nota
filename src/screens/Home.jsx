import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <h1>Qual é a nota?</h1>
      <img
        style={{ width: "80%", height: "40vh", borderRadius: "10px" }}
        src="images/hand.jpeg"
        alt="Vê-se uma mão direita de uma pessoa de pele branca, com cinco dedos. A palma da mão está virada para a câmera e a mão está inclinada na horizontal."
      />
      <div>
        <button>
          <Link to="/Game">começar</Link>
        </button>
        <button>
          <Link to="/About">sobre o jogo</Link>
        </button>
      </div>
      <p>
        desenvolvido por <a href="/">Yu</a>
      </p>
    </div>
  );
};
export default Home;
