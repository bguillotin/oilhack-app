import Sticky from "./Sticky";
import Nav from './Nav';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import 'isomorphic-unfetch';
import injectSheet from 'react-jss';
import styles from './jss/header-style'
import cx from "classnames";

const rootPathname = "/";

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { classes, router, isStickyHeader } = this.props;
    let { pathname } = router;
    const isDarkTheme = (pathname === "/");
    const propsIsSticky = { isSticky : isStickyHeader };

    const navClass = cx(classes.header, isStickyHeader && 'stickyHeader');
    const clsTitle = cx(classes.title, isDarkTheme && 'darkTheme');

    return (
      <header className={navClass}>
        <Link href="/"><span className={clsTitle}>OILHACK</span></Link>
        <Sticky><Nav { ...{ isStickyHeader }} /></Sticky>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({ isStickyHeader: state.isStickyHeader, position :state.position });

export default connect(mapStateToProps)(injectSheet(styles)(withRouter(Header)));
