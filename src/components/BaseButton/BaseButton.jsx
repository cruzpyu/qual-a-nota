import { Link } from "react-router-dom";
import { Button, Label } from "../../styles/app";
import PropTypes from "prop-types";

const BaseButton = ({
  style,
  ariaLabel,
  onClick,
  source,
  label,
  hasIcon,
  path,
}) => {
  return (
    <Link role="button" style={style} to={path}>
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
