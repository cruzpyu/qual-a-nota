import { Button } from "../../styles/app";
import { styles } from "./Modal-styles";

export const Modal = ({ onClick, feedback }) => {
  return (
    <div role="alert" style={styles.containerStyle}>
      <div style={styles.modalBoxStyle}>
        <h1 style={styles.titleStyle}>Parabéns!</h1>
        <p style={styles.paragraphStyle}>{feedback}</p>
        <Button onClick={onClick}>fechar</Button>
      </div>
    </div>
  );
};
