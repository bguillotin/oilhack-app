import Video from './Video';
import Sticky from "./Sticky";
import Nav from './Nav';
import { connect } from 'react-redux';
import 'isomorphic-unfetch';
import injectSheet from 'react-jss';
import styles from './jss/header-style'

class Header extends React.Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("Here is NextProps :: ", nextProps);
  //   console.log("Here is NextState :: ", nextState);

  //   return true;
  // }

  render() {
    const { classes, isStickyHeader, router } = this.props;

    return (
      <header className={isStickyHeader ? classes.stickyHeader : classes.header}>
        <Video src="http://wearecolorful.net/wp-content/uploads/2017/06/1.mp4"/>
        <Sticky><Nav /></Sticky>
      </header>
    );
  }
}

const mapStateToProps = state => ({ isStickyHeader: state.isStickyHeader });

export default connect(mapStateToProps)(injectSheet(styles)(Header));
