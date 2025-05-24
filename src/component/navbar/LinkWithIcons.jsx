import React from "react";
import "./LinkWithIcons.css";
import { NavLink } from "react-router-dom";

const LinkWithIcons = ({ title, link, emoji , sidebar}) => {
  return (
    <NavLink to={link} className={sidebar ? 'align_center sidebar_link' : 'align_center'}>
        {title} <img src={emoji} alt="image not found" className="link_emoji" />
      </NavLink>
  );
};

export default LinkWithIcons;
