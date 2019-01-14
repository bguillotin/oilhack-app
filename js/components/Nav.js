import { withRouter } from 'next/router';
import Link from 'next/link';
import styles from './jss/nav-style';
import injectSheet from 'react-jss';
import cx from 'classnames';

class Nav extends React.PureComponent {
  toUpperCase = (string) => <b>{string.toUpperCase()}</b>;

  render() {
    const { classes, router, isSticky } = this.props;
    let { pathname } = router;
    const isDark = (pathname === "/");
    // Home - Video - Gallery - About - Contact
    const clsNav = cx(classes.nav);
    const clsUl = cx(classes.topMenu);
    const clsTitle = cx(classes.title, isSticky && 'sticky', isDark && 'dark');

    return (
      <React.Fragment>
        <nav className={clsNav}>
          <span className={clsTitle}>OILHACK</span>
          <ul className={clsUl}>
            <li>
              <Link href="/">
                <a className={ cx(router.pathname === "/" ? "activeLink" : "inactiveLink", isDark && 'dark', isSticky && 'sticky')  } >
                  {this.toUpperCase("Home")}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/video">
                <a className={ cx(router.pathname.includes("video") ? "activeLink" : "inactiveLink", isDark && 'dark', isSticky && 'sticky') } >
                  {this.toUpperCase("Video")}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/gallery">
                <a className={ cx(router.pathname.includes("gallery") ? "activeLink" : "inactiveLink", isDark && 'dark', isSticky && 'sticky') } >
                  {this.toUpperCase("Gallery")}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={ cx(router.pathname.includes("about") ? "activeLink" : "inactiveLink", isDark && 'dark', isSticky && 'sticky') } >
                  {this.toUpperCase("About")}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className={ cx(router.pathname.includes("contact") ? "activeLink" : "inactiveLink", isDark && 'dark', isSticky && 'sticky') } >
                  {this.toUpperCase("Contact")}
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </React.Fragment>

    );
  }
}
export default injectSheet(styles)(withRouter(Nav));
