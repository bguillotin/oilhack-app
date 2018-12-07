import Sticky from "./Sticky";
import Nav from './Nav';
import { connect } from 'react-redux';
import 'isomorphic-unfetch';
import injectSheet from 'react-jss';
import styles from './jss/header-style'
import classNames from "classnames";

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { classes, isStickyHeader } = this.props;
    let navClass = classNames(isStickyHeader ? classes.stickyHeader : classes.header, classes.background);

    return (
      <header className={navClass}>
        <span className={classes.title}>OILHACK</span>
        <Sticky><Nav/></Sticky>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({ isStickyHeader: state.isStickyHeader, position :state.position });

export default connect(mapStateToProps)(injectSheet(styles)(Header));
