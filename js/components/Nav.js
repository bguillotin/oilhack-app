import { withRouter } from "next/router";
import Link from "next/link";
import styles from "./jss/nav-style";
import injectSheet from "react-jss";
import cx from "classnames";

class Nav extends React.PureComponent {
  stringToHTMLBoldAndUpperCase = string => <b>{string.toUpperCase()}</b>;

  render() {
    const { classes, router, isSticky } = this.props;
    let { pathname } = router;
    const isDark = pathname === "/";
    // Home - Video - Gallery - About - Contact
    const clsNav = cx(classes.nav);
    const clsUl = cx(classes.topMenu);
    const clsTitle = cx(classes.title, isSticky && "sticky", isDark && "dark");

    return (
      <React.Fragment>
        <nav className={clsNav}>
          <span className={clsTitle}>OILHACK</span>
          <ul className={clsUl}>
            <li>
              <Link href="/">
                <a
                  className={cx(
                    router.pathname === "/" && "activeLink",
                    isDark && "dark",
                    isSticky && "sticky"
                  )}
                >
                  {this.stringToHTMLBoldAndUpperCase("Home")}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/video">
                <a
                  className={cx(
                    router.pathname.includes("video") && "activeLink",
                    isDark && "dark",
                    isSticky && "sticky"
                  )}
                >
                  {this.stringToHTMLBoldAndUpperCase("Video")}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/gallery">
                <a
                  className={cx(
                    router.pathname.includes("gallery") && "activeLink",
                    isDark && "dark",
                    isSticky && "sticky"
                  )}
                >
                  {this.stringToHTMLBoldAndUpperCase("Art Work")}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a
                  className={cx(
                    router.pathname.includes("about") && "activeLink",
                    isDark && "dark",
                    isSticky && "sticky"
                  )}
                >
                  {this.stringToHTMLBoldAndUpperCase("About Me")}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  className={cx(
                    router.pathname.includes("contact") && "activeLink",
                    isDark && "dark",
                    isSticky && "sticky"
                  )}
                >
                  {this.stringToHTMLBoldAndUpperCase("Contact")}
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
