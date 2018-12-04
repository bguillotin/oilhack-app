import { withRouter } from "next/router";
import Link from "next/link";
import styles from "./jss/nav-style";
import injectSheet from "react-jss";
import { Seq } from "immutable";

class Nav extends React.PureComponent {
  toUpperCase = string => <b>{string.toUpperCase()}</b>;

  render() {
    const { classes, router } = this.props;

    return (
      <nav className={classes.nav}>
        <ul className={classes.topMenu}>
          <li>
            <Link href="/">
              <a
                className={
                  router.pathname === "/"
                    ? classes.activeLink
                    : classes.inactiveLink
                }
              >
                {this.toUpperCase("Home")}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/video">
              <a
                className={
                  router.pathname === "/video"
                    ? classes.activeLink
                    : classes.inactiveLink
                }
              >
                {this.toUpperCase("Videos")}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a
                className={
                  router.pathname === "/portfolio"
                    ? classes.activeLink
                    : classes.inactiveLink
                }
              >
                {this.toUpperCase("Portfolio")}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a
                className={
                  router.pathname === "/about"
                    ? classes.activeLink
                    : classes.inactiveLink
                }
              >
                {this.toUpperCase("About")}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a
                className={
                  router.pathname === "/contact"
                    ? classes.activeLink
                    : classes.inactiveLink
                }
              >
                {this.toUpperCase("Contact me")}
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default injectSheet(styles)(withRouter(Nav));
