import React from "react";

import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import LogoSmallDevices from "./LogoSmallDevices";
const PortflioHeader = ({ projectsRef, contactRef, setTooltipOn }) => {
  const handleScrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`flex items-center justify-between lg:px-28 md:px-14 sm:px-10 xs:px-8 px-5 py-4 sticky top-0 z-[10000] mix-blend-difference`}
    >
      <figure
        className="xs:w-24 w-12 relative z-20 cursor-pointer "
        onMouseEnter={() => {
          setTooltipOn(true);
        }}
        onMouseLeave={() => {
          setTooltipOn(false);
        }}
      >
        <Logo />
        <LogoSmallDevices />
      </figure>
      <ul className={`flex items-center gap-8 xxxs:max-xs:gap-4 text-white  `}>
        <li>
          <NavLink
            onClick={handleScrollToProjects}
            className="flex items-center gap-0.5 xs:text-xl xxs:text-lg text-base  font-urbanist font-semibold mix-blend-difference"
          >
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            onClick={handleScrollToContact}
            className="flex items-center gap-0.5 xs:text-xl xxs:text-lg text-base  font-urbanist font-semibold mix-blend-difference "
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default PortflioHeader;
