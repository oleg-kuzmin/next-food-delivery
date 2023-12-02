import UpLink from './UpLink/UpLink';
import Copyright from './Copyright/Copyright';
import Navigation from './Navigation/Navigation';

import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <UpLink />
      <Copyright />
      <Navigation />
    </footer>
  );
}
