import React from "react";
import SneppyLogo from "../../asset/img/sneppy-logo.png";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <>
      <div className="navbar navbar-expand-lg navbar-light fixed-top navbar__bg-light">
        <div className="container-fluid">
          <div className="leftItems container">
            <Link className="navbar-brand" to="/">
              <img
                src={SneppyLogo}
                alt="snepy-logo"
                className="navbar__brand-logo"
              />
            </Link>
          </div>
          <div className="rightItems">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ms-auto" id="navbarText">
              <span className="navbar-text">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-end">
                  <li className="nav-item mx-1">
                    <Link
                      className="nav-link navbar__item_text"
                      aria-current="page"
                      to="/"
                    >
                      Beranda
                    </Link>
                  </li>
                  <li className="nav-item mx-1">
                    <Link
                      className="nav-link navbar__item_text"
                      aria-current="page"
                      to="/"
                    >
                      Tentang Kami
                    </Link>
                  </li>
                  <li className="nav-item mx-1">
                    <Link
                      className="nav-link navbar__item_text"
                      aria-current="page"
                      to="/"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li className="nav-item mx-1">
                    <Link
                      className="nav-link navbar__item_text"
                      aria-current="page"
                      to="/"
                    >
                      Kontak Kami
                    </Link>
                  </li>
                  <li className="nav-item mx-1">
                    <Link
                      className="nav-link navbar__item_text btn-buy-navbar"
                      aria-current="page"
                      to="/"
                      onClick={() =>
                        window.open(
                          "https://forms.gle/XcdB1xeLUW9ZZwNo7",
                          "_blank"
                        )
                      }
                    >
                      Miliki SNEPY! mu
                    </Link>
                  </li>
                  <li className="nav-item mx-1 d-flex justify-content-center">
                    <div className="nav-link navbar__item_text">ID</div>
                    <input type="checkbox" id="toggle" className="d-none" />
                    <label for="toggle"></label>
                    <div className="nav-link navbar__item_text">EN</div>
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
