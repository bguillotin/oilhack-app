import Link from "next/link";
import Video from "./Video";
import { connect } from "react-redux";
import "isomorphic-unfetch";
import injectSheet from "react-jss";
import { withRouter } from 'next/router'
import styles from './jss/header-style'


class Header extends React.Component {

    // shouldComponentUpdate(nextProps, nextState) {
    //   console.log("Here is NextProps :: ", nextProps);
    //   console.log("Here is NextState :: ", nextState);

    //   return true;
    // }

  toUpperCase = string => <b>{string.toUpperCase()}</b>;

  render() {
    const { classes, isStickyHeader } = this.props;

    return (
      <header className={isStickyHeader ? classes.stickyHeader : classes.header}>
        <Video src="http://wearecolorful.net/wp-content/uploads/2017/06/1.mp4" />
        <nav className={classes.nav}>
          <ul className={classes.topMenu}>
            <li>
              <Link href="/">   
                <a className={ this.props.router.pathname === "/" ? classes.activeLink : classes.inactiveLink }>{this.toUpperCase("Home")}</a>
              </Link>
            </li>
            <li>
              <Link href="/video">
                <a className={ this.props.router.pathname === "/video" ? classes.activeLink : classes.inactiveLink }>{this.toUpperCase("Videos")}</a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <a>{this.toUpperCase("Portfolio")}</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>{this.toUpperCase("About")}</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>{this.toUpperCase("Contact me")}</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({ isStickyHeader: state.isStickyHeader });

export default connect(mapStateToProps)(injectSheet(styles)(withRouter(Header)));
