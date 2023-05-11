import PropTypes from "prop-types";
import { Button, Label, StyledLink } from "../../styles/app";
import Icon from "../Icon/Icon";

const BaseButton = ({
  ariaLabel,
  onClick,
  source,
  label,
  hasIcon,
  path,
  iconSize,
}) => {
  return (
    <StyledLink role="button" to={path}>
      <Button aria-label={ariaLabel} onClick={onClick}>
        {hasIcon && <Icon source={source} size={iconSize} />}
        <Label>{label}</Label>
      </Button>
    </StyledLink>
  );
};

BaseButton.propTypes = {
  ariaLabel: PropTypes.string,
  onClick: PropTypes.func,
  source: PropTypes.string,
  label: PropTypes.string.isRequired,
  hasIcon: PropTypes.bool,
  path: PropTypes.string,
  iconSize: PropTypes.number,
};

export default BaseButton;
