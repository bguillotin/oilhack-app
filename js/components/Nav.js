import { withRouter } from "next/router";
import Link from "next/link";
import styles from "./jss/nav-style";
import injectSheet from "react-jss";
import cx from "classnames";

const rootPathname = "/";

class Nav extends React.PureComponent {
  stringToHTMLBoldAndUpperCase = string => <b>{string.toUpperCase()}</b>;

  renderLink = (path, text, currentPathname, isDarkTheme, isStickyHeader) =>            
    <Link href={path}><a  className={cx(currentPathname === path && "activeLink", isDarkTheme && "darkTheme", isStickyHeader && "sticky")}
    >
      {this.stringToHTMLBoldAndUpperCase(text)}
    </a>
</Link>;
  render() {
    const { classes, router, isStickyHeader } = this.props;
    let { pathname: currentPathname } = router;
    const isDarkTheme = (currentPathname === rootPathname);
    // Home - Video - Gallery - About - Contact
    const clsNav = cx(classes.nav);
    const clsUl = cx(classes.topMenu);
    const clsTitle = cx(classes.title, isStickyHeader && "sticky", isDarkTheme && "darkTheme");

    const navigationArray = [
      { pathname: rootPathname, title: 'home'},
      { pathname: "/video", title: 'video'}, 
      { pathname: "/gallery", title: 'art work'}, 
      { pathname: "/about", title: 'about me'},
      { pathname: "/contact", title: 'contact'}];

    return (
      <React.Fragment>
        <nav className={clsNav}>
        <Link href="/"><span className={clsTitle}>OILHACK</span></Link>
          <ul className={clsUl}>
            { navigationArray.map(
              (nav) => (<li>{this.renderLink(nav.pathname, nav.title,  currentPathname, isDarkTheme, isStickyHeader)}</li>)
            )}
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}
export default injectSheet(styles)(withRouter(Nav));
