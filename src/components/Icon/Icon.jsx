import PropTypes from "prop-types";

const Icon = ({ source, size }) => {
  return (
    <img src={source} style={{ width: `${size}px`, height: `${size}px` }} />
  );
};

Icon.propTypes = {
  source: PropTypes.string,
  size: PropTypes.number,
};

export default Icon;
