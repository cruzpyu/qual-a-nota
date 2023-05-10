import { styles } from "./Modal-styles";

export const Modal = ({ onClick, feedback }) => {
  return (
    <div style={styles.containerStyle}>
      <div style={styles.modalBoxStyle}>
        <h1 style={styles.titleStyle}>Parabéns!</h1>
        <p style={styles.paragraphStyle}>{feedback}</p>
        <button onClick={onClick} style={styles.buttonStyle}>
          Fechar
        </button>
      </div>
    </div>
  );
};
