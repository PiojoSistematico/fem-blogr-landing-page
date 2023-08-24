import logo from "../assets/images/logo.svg";
import iconHamburger from "../assets/images/icon-hamburger.svg";
import iconClose from "../assets/images/icon-close.svg";
import Dropdown from "./Dropdown";

import { useState } from "react";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick(): void {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={isMenuOpen ? "overlay" : ""}>
      <a href="#">
        <img src={logo} alt="Blogr" className="logo" />
      </a>

      <button
        className="btn-menu mobile"
        aria-controls="primary-navigation"
        aria-expanded="false"
        onClick={handleClick}
      >
        {isMenuOpen ? (
          <img
            className="icon-close"
            src={iconClose}
            alt="Close Menu"
            aria-hidden="false"
          />
        ) : (
          <img
            className="icon-hamburger"
            src={iconHamburger}
            alt="Open Menu"
            aria-hidden="false"
          />
        )}

        <span className="visually-hidden">Menu</span>
      </button>
      <nav
        className={
          isMenuOpen
            ? "menu-open primary-navigation desktop"
            : "primary-navigation desktop"
        }
        id="primary-navigation"
      >
        <ul aria-label="Primary" role="list">
          <Dropdown title={"Product"}>
            <ul>
              <li>
                <a href="">Overview</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Marketplace</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Integrations</a>
              </li>
            </ul>
          </Dropdown>
          <Dropdown title={"Company"}>
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Team</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
            </ul>
          </Dropdown>
          <Dropdown title={"Connect"}>
            <ul>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Newsletter</a>
              </li>
              <li>
                <a href="">LinkedIn</a>
              </li>
            </ul>
          </Dropdown>
        </ul>
        <ul className="buttons-section" role="list">
          <li>
            <button className="btn-login">Login</button>
          </li>
          <li>
            <button className="btn-register">Sign Up</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
