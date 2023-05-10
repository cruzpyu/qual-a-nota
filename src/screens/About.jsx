import { TextBox, Title } from "../styles/app";
import BaseButton from "../components/BaseButton/BaseButton";

const About = () => {
  return (
    <TextBox>
      <Title> Qual é a nota? </Title>
      <p>
        O aplicativo "Qual é a Nota?" é uma ferramenta criada para facilitar o
        aprendizado de partitura e auxiliar músicos em treinar a memorização da
        posição das notas nas linhas e espaços do pentagrama.
      </p>
      <p>
        O objetivo do jogo é acertar qual nota está sendo apontada pela seta na
        palma da mão. Essa técnica é muito utilizada por músicos iniciantes para
        associar a posição das notas nas linhas e espaços do pentagrama com as
        posições dos dedos nas mãos.
      </p>
      <p>
        Ao jogar "Qual é a Nota?", o usuário treina essa habilidade de forma
        lúdica e interativa. A palma da mão é semelhante ao pentagrama porque
        possui cinco linhas, assim como o pentagrama possui cinco linhas e
        quatro espaços. Além disso, a posição dos dedos na palma da mão pode ser
        associada às notas nas linhas e espaços do pentagrama.
      </p>
      <p>
        O aplicativo "Qual é a Nota?" é uma ferramenta útil para músicos de
        todos os níveis que desejam aprimorar seus conhecimentos em partitura e
        desenvolver habilidades de memorização das notas. Com essa ferramenta,
        aprender música pode se tornar mais fácil e divertido.
      </p>
      <BaseButton
        path="/"
        hasIcon
        source="icons/home.png"
        label="home"
        ariaLabel="voltar para a tela inicial"
      />
    </TextBox>
  );
};
export default About;
