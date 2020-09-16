import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./App.css";

//The code to make the button that scrolls all the way up to the top when we are viewing memes
//It is an outilne Button from React Bootstrap the appears only if the page is scrolled all the way down in a certain point

//in the beginning the button does not appear
const ScrollTopArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  //the method to check if the page is windowed down enough to show the scroll button
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  //the behaviour that the scroll up has. which in this case is "smooth"
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
