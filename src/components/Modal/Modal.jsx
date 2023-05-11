import { Button } from "../../styles/app";
import BaseButton from "../BaseButton/BaseButton";
import { styles } from "./Modal-styles";

export const Modal = ({ onClick, feedback }) => {
  return (
    <div role="alert" style={styles.containerStyle}>
      <div style={styles.modalBoxStyle}>
        <h1 style={styles.titleStyle}>Parabéns!</h1>
        <p style={styles.paragraphStyle}>{feedback}</p>
        <BaseButton onClick={onClick} label="fechar" />
      </div>
    </div>
  );
};
