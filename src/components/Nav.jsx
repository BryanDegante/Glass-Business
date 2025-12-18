import React, { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import logo from "../Assets/logo2.png";
import { RiMenu2Line } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";

const Nav = ({ whichLanguage, isEnglish }) => {
  const navContainerRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div ref={navContainerRef} className="nav-Container">
      <div className="nav-header">
        <nav>
          <div className="img-div">
            <img src={logo} className="logo" alt="" />
          </div>
          {isEnglish ? (
            <div className="number--wrapper ">
              <FaPhoneAlt />
              <a className="number " href="tel:+7139929303">
                713-992-9303
              </a>
            </div>
          ) : (
            <div className="number--wrapper">
              <FaPhoneAlt />
              <a className="number" href="tel:+17132593755">
                713-259-3755
              </a>
            </div>
          )}

          {isEnglish ? (
            <ul className="nav__list">
              <li>
                <a href="/" className="nav__link link__hover--effect">Home</a>
              </li>
              <li >
                <a href="/galleryPage" className="nav__link link__hover--effect">Gallery</a>
              </li>
			   <button
                className="menu__button button"
                onClick={() => whichLanguage(false)}
              >
                Español
              </button>
            </ul>
          ) : (
            <ul className="nav__list">
              <li>
                <a href="/">Inicial</a>
              </li>
              <li>
                <a href="/galleryPage">Galleria</a>
              </li>
			   <button
                className="menu__button button"
                onClick={() => whichLanguage(false)}
              >
                Español
              </button>
            </ul>
          )}

          
        </nav>
      </div>
    </div>
  );
};

export default Nav;
