import React from 'react';
import { array } from 'prop-types';
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

const renderSocialLinks = (items) => {
  const socialLinks = items.map((item, index) => {
    const { sociallink: socialLink, sociallogo: socialLogo } = item;

    return (
      <li key={index}>
        <a href={socialLink.url}>
          <img
            src={socialLogo.url}
            alt={socialLogo.alt}
            loading="lazy"
            width="32"
          />
        </a>
      </li>
    );
  });

  return socialLinks;
};

const Footer = ({ data }) => {
  const logoSection = data.find((section) => section.slice_type === 'logo');
  const { primary: logoContent } = logoSection;
  const { logo } = logoContent;
  const { url: logoUrl, alt } = logo;

  const menuSection = data.find((section) => section.slice_type === 'menu');
  const { items: menuItems } = menuSection;

  const socialSection = data.find(
    (section) => section.slice_type === 'social_links'
  );
  const { items: socialItems } = socialSection;

  const submenuSection = data.find(
    (section) => section.slice_type === 'submenu'
  );
  const { items: submenuItems } = submenuSection;

  return (
    <footer className="footer">
      <Link to="/">
        <img src={logoUrl} alt={alt} width="64" loading="lazy" />
      </Link>
      <ul className="menu">{renderMenu(menuItems)}</ul>
      <ul className="social">{renderSocialLinks(socialItems)}</ul>
      <ul className="submenu">{renderMenu(submenuItems)}</ul>
    </footer>
  );
};

Footer.propTypes = {
  data: array,
};

export default Footer;
