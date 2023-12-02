import NavigationLink from '../NavigationLink/NavigationLink';
import NavigationUnderline from '../NavigationUnderline/NavigationUnderline';

export default function NavigationElement({ children, href, onClick, nameActiveLink }) {
  const isActive = href === nameActiveLink;

  return (
    <>
      <NavigationLink href={href} onClick={onClick} isActive={isActive}>
        {children}
      </NavigationLink>
      <NavigationUnderline isActive={isActive} />
    </>
  );
}
