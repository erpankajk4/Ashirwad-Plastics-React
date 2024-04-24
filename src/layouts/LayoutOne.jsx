import PropTypes from "prop-types";
import { Fragment } from "react";
import Header from "../wrappers/header/Header.jsx";
import Footer from "../wrappers/footer/Footer.jsx";

const LayoutOne = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />

    </Fragment>
  );
};

LayoutOne.propTypes = {
  children: PropTypes.node,
  headerContainerClass: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerPositionClass: PropTypes.string,
  headerTop: PropTypes.string,
};

export default LayoutOne;
