import React, { useState } from "react";
//import {FaArrowCircleUp} from 'react-icons/fa';
import Button from "react-bootstrap/Button";
import "./App.css";

const ScrollTopArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <Button
      className="scrollTop"
      variant="outline-primary"
      onClick={scrollTop}
      style={{ height: 50, display: showScroll ? "flex" : "none" }}
    >
      {" "}
      <span role="img" aria-label="toTop">
        🏠
      </span>{" "}
    </Button>
  );
};

export default ScrollTopArrow;
