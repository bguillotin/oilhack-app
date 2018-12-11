import { withRouter } from 'next/router';
import Link from 'next/link';
import styles from './jss/nav-style';
import injectSheet from 'react-jss';

class Nav extends React.PureComponent {
  toUpperCase = string => <b>{string.toUpperCase()}</b>;

  render() {
    const { classes, router, isSticky } = this.props;
    // Home - Video - Gallery - About - Contact

    return (
      <React.Fragment>
        <nav className={classes.nav}>
          <span className={isSticky ? classes.titleSticky : classes.title}>OILHACK</span>
          <ul className={isSticky ? classes.topMenuSticky: classes.topMenu}>
            <li>
              <Link href="/">
                <a className={ router.pathname === "/" ? "activeLink" : "inactiveLink" } >
                  {this.toUpperCase("Home")}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/video">
                <a className={ router.pathname === "/video" ? "activeLink" : "inactiveLink" } >
                  {this.toUpperCase("Video")}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/gallery">
                <a className={ router.pathname === "/gallery" ? "activeLink" : "inactiveLink" } >
                  {this.toUpperCase("Gallery")}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={ router.pathname === "/about" ? "activeLink" : "inactiveLink" } >
                  {this.toUpperCase("About")}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className={ router.pathname === "/contact" ? "activeLink" : "inactiveLink" } >
                  {this.toUpperCase("Contact")}
                </a>
              </Link>
            </li>
            <li>
              {/* <a href="https://www.instagram.com/oilhack/" target="_blank">
                <InstaLogo />
              </a> */}
            </li>
          </ul>
        </nav>
      </React.Fragment>

    );
  }
}
export default injectSheet(styles)(withRouter(Nav));
