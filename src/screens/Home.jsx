import Footer from "../components/Footer/Footer";
import LinkButton from "../components/LinkButton/LinkButton";
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
        <LinkButton path="/game" text="começar" />
        <LinkButton path="/about" text="sobre o jogo" />
      </Box>
      <Footer />
    </Container>
  );
};
export default Home;
