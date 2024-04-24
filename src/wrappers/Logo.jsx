import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Logo = ({ imageUrl, logoClass }) => {
  return (
    <div className="w-[15rem]">
      <Link to="/">
        <img alt="" src={imageUrl}  className="md:cursor-pointer"/>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  imageUrl: PropTypes.string,
  logoClass: PropTypes.string,
};

export default Logo;
