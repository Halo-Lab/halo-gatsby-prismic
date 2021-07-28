import React from 'react';
import { array } from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const renderMenu = (items) => {
  const menu = items.map((item, index) => {
    const { itemlink, menuitem } = item;
    const { url } = itemlink;
    const { text: itemText } = menuitem;

    return (
      <li key={index}>
        <Link to={url}>{itemText}</Link>
      </li>
    );
  });

  return menu;
};

const Header = ({ data }) => {
  const logoSection = data.find((section) => section.slice_type === 'logo');
  const menuSection = data.find((section) => section.slice_type === 'menu');

  const { primary: logoContent } = logoSection;
  const { logo } = logoContent;
  const { gatsbyImageData, alt } = logo;
  const { primary, items: menuItems } = menuSection;
  const { buttonlink: buttonLink, buttontext: buttonText } = primary;

  return (
    <header className="header">
      <div className="hero-image" style={{ width: 64 }}>
        <Link to="/">
          <GatsbyImage image={gatsbyImageData} alt={alt} />
        </Link>
      </div>
      <ul className="menu">{renderMenu(menuItems)}</ul>
      <a href={buttonLink.url}>{buttonText.text}</a>
    </header>
  );
};

Header.propTypes = {
  data: array,
};

export default Header;
