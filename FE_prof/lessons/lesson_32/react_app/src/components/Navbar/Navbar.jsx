import React from 'react';
import { NavbarElement, Navigation, NavigationLink } from './styled';
import LogoIcon from '../../Logo/LogoIcon';
import AccountIcon from '../../Logo/AccountIcon';
import SearchIcon from '../../Logo/SearchIcon';
import HeartIcon from '../../Logo/HeartIcon';
import CartIcon from '../../Logo/CartIcon';

const links = [
  { link: '/home', name: 'Name' },
  { link: '/shop', name: 'Shop' },
  { link: '/about', name: 'About' },
  { link: '/contact', name: 'Contact' },
];

export const Navbar = () => {
  return (
    <NavbarElement>
      <LogoIcon />
      <Navigation>
        {links.map(({ link, name }, index) => {
          return (
            <NavigationLink key={index} to={link}>
              {name}
            </NavigationLink>
          );
        })}
      </Navigation>
      <AccountIcon />
      <SearchIcon />
      <HeartIcon />
      <CartIcon />
    </NavbarElement>
  );
};
