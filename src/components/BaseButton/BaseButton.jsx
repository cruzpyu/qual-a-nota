import { Link } from "react-router-dom";
import { Button, Label } from "../../styles/app";
import PropTypes from "prop-types";

const BaseButton = ({ ariaLabel, onClick, source, label, hasIcon, path }) => {
  return (
    <Link to={path}>
      <Button aria-label={ariaLabel} onClick={onClick}>
        {hasIcon && <img src={source} style={{ width: "16px" }} />}
        <Label>{label}</Label>
      </Button>
    </Link>
  );
};

BaseButton.propTypes = {
  ariaLabel: PropTypes.string,
  onClick: PropTypes.func,
  source: PropTypes.string,
  label: PropTypes.string.isRequired,
  hasIcon: PropTypes.bool,
  path: PropTypes.string,
};

export default BaseButton;
