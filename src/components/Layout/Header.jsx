/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable no-lone-blocks */

import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./../../index.css";

import Logo from './../../assets/images/Logo.png';

function Header() {
  const navRef = useRef(null);



  return (
    <>
      <header
        id="navbar"
        className={`w-full items-center transparent-nav flex flex-col fixed z-50 transition-all duration-200 ease-linear -top-[6rem]`}
        ref={navRef}
      >
        <div className="flex justify-between items-center py-7 w-[85%]">
          <div className="flex gap-8 items-center">
            <Link to="/">
              <img src={Logo} />
            </Link>
          </div>

          <div className="flex justify-end items-center gap-8">
            <div
              className="flex items-center gap-2 cursor-pointer"
            >
              <Link to="/reklam" className="flex items-center gap-2">
                <p className="font-light uppercase text-sm tracking-wider">Reklamfilm</p>
              </Link>
            </div>
            <Link to="/eventfilm" className="flex items-center gap-2">
              <p className="font-light uppercase text-sm tracking-wider">
                Eventfilm
              </p>
            </Link>
            <div
              className="flex items-center gap-2 cursor-pointer"
            >
              <Link to="/coporate" className="flex items-center gap-2">
                <p className="font-light uppercase text-sm tracking-wider">
                  Corporate
                </p>
              </Link>
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer"
            >
              <Link to="/omoss" className="flex items-center gap-2">
                <p className="font-light uppercase text-sm tracking-wider">
                  Om oss
                </p>
              </Link>
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer"
            >
              <p className="font-light uppercase text-sm tracking-wider">
                Kontakt
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
