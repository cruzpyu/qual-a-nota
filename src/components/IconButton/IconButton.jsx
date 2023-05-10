const IconButton = ({ onClick, source }) => {
  return (
    <button onClick={onClick}>
      <img src={source} style={{ width: "20px" }} />
    </button>
  );
};

export default IconButton;
