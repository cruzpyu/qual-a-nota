import Footer from "../components/Footer/Footer";
import BaseButton from "../components/BaseButton/BaseButton";
import { HandImage, Container, Title, Box } from "../styles/app";

const Home = () => {
  return (
    <Container>
      <Title>Qual é a nota?</Title>
      <HandImage
        src="images/hand.jpeg"
        alt="Vê-se uma mão direita de uma pessoa de pele branca, com cinco dedos. A palma da mão está virada para a câmera e a mão está inclinada na horizontal."
      />
      <Box>
        <BaseButton
          hasIcon
          source="icons/play.png"
          path="/game"
          label="começar"
          ariaLabel="começar o jogo"
        />
        <BaseButton
          hasIcon
          source="icons/info.png"
          path="/about"
          label="sobre o jogo"
        />
      </Box>
      <Footer />
    </Container>
  );
};
export default Home;
