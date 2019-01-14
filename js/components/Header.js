import Sticky from "./Sticky";
import Nav from './Nav';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import 'isomorphic-unfetch';
import injectSheet from 'react-jss';
import styles from './jss/header-style'
import cx from "classnames";

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { classes, router, isStickyHeader } = this.props;
    let { pathname } = router;
    const isDark = (pathname === "/");

    const navClass = cx(classes.header, isStickyHeader && 'sticky');
    const clsTitle = cx(classes.title, isDark && 'dark');
    const propsIsSticky = { isSticky : isStickyHeader };

    return (
      <header className={navClass}>
        <span className={clsTitle}>OILHACK</span>
        <Sticky><Nav {...propsIsSticky} /></Sticky>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({ isStickyHeader: state.isStickyHeader, position :state.position });

export default connect(mapStateToProps)(injectSheet(styles)(withRouter(Header)));
