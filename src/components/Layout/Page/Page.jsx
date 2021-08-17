import React, { useEffect, useRef } from "react";
import debounce from "lodash/debounce";
import Header from "../Header/Header";
import "./Page.scss";

const Page = ({ children }) => {
  const pageRef = useRef();
  /**
   * Purpose of `calculateOpacity` is to calculate the opcaity for Parallax Background based on the Scroll
   * Position of the user
   *
   * @param {Number} scrollPosition - Current Scroll Position
   * @param {Number} scrollComparison - Scroll Position to compare against (a combination of height of Parallax
   * Background)
   * @param {Number} backgroundHeight - Height of the Parallax Background
   * @param {Number} prevOpacity - Previous Opacity of the Parallax Background
   * @return {number}
   */
  const calculateOpacity = (
    scrollPosition,
    scrollComparison,
    backgroundHeight,
    prevOpacity
  ) => {
    if (scrollPosition > backgroundHeight) {
      return 0;
    } else if (scrollPosition >= scrollComparison) {
      return Math.max(0.005, prevOpacity / 2);
    } else {
      return 1;
    }
  };

  useEffect(() => {
    if (window.innerWidth >= 992) {
      const handleParallaxScroll = () => {
        const parallaxBackground =
          pageRef.current.getElementsByClassName("parallax__background")[0] ||
          null;
        if (parallaxBackground) {
          parallaxBackground.style.opacity = calculateOpacity(
            window.pageYOffset,
            parallaxBackground.getBoundingClientRect().y +
              parallaxBackground.offsetHeight / 4,
            parallaxBackground.offsetHeight,
            parallaxBackground.style.opacity
          );
        }
      };
      window.addEventListener("scroll", debounce(handleParallaxScroll, 70));
      return () => window.removeEventListener("scroll", handleParallaxScroll);
    }
  }, []);

  return (
    <div className={"page"} ref={pageRef}>
      <Header />
      {children}
    </div>
  );
};

export default Page;
