import React, { useEffect } from "react";
import debounce from "lodash/debounce";
import Header from "../Header/Header";
import "./Page.scss";

const PageHero = ({ heroTitle, heroPhrase, className = "" }) => {
  return (
    <div className={`content__hero ${className}`}>
      <h1 className={"hero__title"}>{heroTitle}</h1>
      <h6 className={"hero__phrase"}>{heroPhrase}</h6>
    </div>
  );
};

const Page = ({
  className = "",
  children,
  heroPhrase,
  heroTitle,
  mainClassName = "",
  heroClassName = "",
}) => {
  /**
   * Purpose of `calculateOpacity` is to calculate the opacity for Parallax Background based on the Scroll
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
        const parallax = document.getElementsByClassName("parallax");
        if (parallax.length) {
          const parallaxBackground =
            parallax[0].getElementsByClassName("parallax__background")[0] ||
            null;
          if (parallaxBackground) {
            parallaxBackground.style.opacity = calculateOpacity(
              window.pageYOffset,
              parallaxBackground.getBoundingClientRect().y +
                parallaxBackground.offsetHeight / 4,
              parallaxBackground.offsetHeight,
              parallaxBackground.style.opacity
            );
          } else {
            throw new Error(
              "No Parallax Background Found. Parallax class requires a Background element"
            );
          }
        }
      };
      window.addEventListener("scroll", debounce(handleParallaxScroll, 70));
      return () => window.removeEventListener("scroll", handleParallaxScroll);
    }
  }, []);

  return (
    <div className={`page ${className}`}>
      <Header />
      <main className={`page__content ${mainClassName}`}>
        <PageHero
          className={`${heroClassName}`}
          heroPhrase={heroPhrase}
          heroTitle={heroTitle}
        />
        {children}
      </main>
    </div>
  );
};

export default Page;
