import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isHome = useLocation().pathname === "/";

  const toggle = () => setIsOpen(prev => !prev);

  const menuBtnClass = `cursor-pointer z-20 absolute right-4 transition-all duration-200`;
  const closedIconClass = isOpen ? "opacity-0 -translate-x-full" : "opacity-100 translate-x-0";
  // added z-50 so nav sits above the backdrop
  const navBaseClass = `flex gap-2 bg-white sm:bg-transparent flex-col sm:flex-row top-0 p-8 sm:p-0 sm:top-auto w-fit shadow-md sm:shadow-none h-screen sm:h-auto absolute sm:right-4 right-0 lg:gap-6 text-xs md:text-sm items-center justify-start instrument-regular transition-all duration-200 z-50`;
  const navOpenClass = isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none";

  const items = [
    { label: "Services", href: isHome ? "#services" : "/" },
    { label: "Their Stories", href: isHome ? "#aboutteam" : "/" },
    { label: "Our Story", href: isHome ? "#aboutus" : "/" },
    { label: "Varnan", href: isHome ? "#home" : "/" },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-between items-center p-4 bg-[#FFFBFB59] instrument-regular ">
        <div>
            <img src="/assn/VFilms Logo.png" alt="" className="ml-2 w-16"/>
        </div>

        
          {/* menu-open icon (when closed) */}
          <button
            type="button"
            aria-label={isOpen ? "Menu closed" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            onClick={toggle}
            className={`${menuBtnClass} ${closedIconClass}`}
          >
            <img src="/assn/Menu.svg" alt="open menu" className="w-9" />
          </button>

          <nav
            id="primary-navigation"
            className={`${navBaseClass} ${navOpenClass}`}
            aria-hidden={!isOpen}
          >
            {items.map((it) => (
              isHome ? 
                (
                <a key={it.label} href={it.href}>{it.label}</a>
              ) : (
                <Link key={it.label} to={it.href}>{it.label}</Link>
              )
            ))}

            <Link
              to="/#contactus"
              className="bg-[#F15D2B] text-white text-xs md:text-sm rounded-full p-2 px-3 flex  gap-1 md:gap-2 items-center justify-center"
            >
              <span>Let's Talk</span>
              <img src="/assn/Hero/mail.svg" alt="mail icon" className="w-5" />
            </Link>

            <button
              type="button"
              aria-label="Close menu"
              aria-expanded={isOpen}
              onClick={toggle}
              className="cursor-pointer"
            >
              <img src="/assn/Hero/Open.svg" alt="close menu" className="w-9" />
            </button>
          </nav>
      </header>

      {/* Backdrop for small screens only. Clicking it closes the menu. */}
      <div
        className={`fixed inset-0 z-40 bg-black/20 transition-opacity duration-200 sm:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={toggle}
        aria-hidden={!isOpen}
      />
    </>
  );
};

export default NavBar;
