import React, { useEffect } from "react";
import debounce from "lodash/debounce";
import Header from "../Header/Header";
import "./Page.scss";

const PageHero = ({ heroTitle, heroPhrase, className = "" }) => (
  <div className={`content__hero ${className}`}>
    <h1 className="hero__title">{heroTitle}</h1>
    <h6 className="hero__phrase">{heroPhrase}</h6>
  </div>
);

const Page = ({
  className = "",
  children,
  heroPhrase,
  heroTitle,
  mainClassName = "",
  heroClassName = "",
}) => {
  /**
   * Purpose of `calculateOpacity` is to calculate the opacity for Parallax Background based
   * on the Scroll Position of the user
   *
   * @param {Number} scrollPosition - Current Scroll Position
   * @param {Number} scrollComparison - Scroll Position to compare against
   * (a combination of height of Parallax Background)
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
    let opacity = 1;
    if (scrollPosition > backgroundHeight) {
      opacity = 0;
    } else if (scrollPosition >= scrollComparison) {
      opacity = Math.max(0.005, prevOpacity / 2);
    }
    return opacity;
  };

  useEffect(() => {
    const handleParallaxScroll = () => {
      const parallax = document.getElementsByClassName("parallax");
      const parallaxBackground =
        parallax[0].getElementsByClassName("parallax__background")[0] || null;
      if (window.innerWidth >= 992 && parallaxBackground) {
        parallaxBackground.style.opacity = calculateOpacity(
          window.pageYOffset,
          parallaxBackground.getBoundingClientRect().y +
            parallaxBackground.offsetHeight / 4,
          parallaxBackground.offsetHeight,
          parallaxBackground.style.opacity
        );
      } else {
        parallaxBackground.style.opacity = 1;
      }
    };
    window.addEventListener("scroll", debounce(handleParallaxScroll, 70));
    return () => window.removeEventListener("scroll", handleParallaxScroll);
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
