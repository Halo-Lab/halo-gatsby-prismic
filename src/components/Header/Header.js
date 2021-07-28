import React from 'react';
import { array } from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import { menu, menuItem, menuLink } from './Header.module.scss';

const renderMenu = (items) => {
  const menu = items.map((item, index) => {
    const { itemlink, menuitem } = item;
    const { url } = itemlink;
    const { text: itemText } = menuitem;

    return (
      <li key={index} className={menuItem}>
        <Link to={url} className={menuLink}>
          {itemText}
        </Link>
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
  const { buttontext: buttonText } = primary;

  return (
    <header className="header navbar pt-3 mb-5">
      <div className="hero-image" style={{ width: 64 }}>
        <Link to="/">
          <GatsbyImage image={gatsbyImageData} alt={alt} />
        </Link>
      </div>
      <div className="d-flex">
        <ul className={menu}>{renderMenu(menuItems)}</ul>
        <button className="btn btn-outline-success me-2" type="button">
          {buttonText.text}
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  data: array,
};

export default Header;
