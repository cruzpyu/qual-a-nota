import { Link } from "react-router-dom";

const LinkButton = ({ path, text }) => {
  return (
    <button>
      <Link style={{ color: "white" }} to={path}>
        {text}
      </Link>
    </button>
  );
};

export default LinkButton;
