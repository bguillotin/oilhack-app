import Video from './Video';
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
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("Here is NextProps :: ", nextProps);
  //   console.log("Here is NextState :: ", nextState);

  //   return true;
  // }

  render() {
    const { classes, isStickyHeader } = this.props;
    let navClass = classNames(isStickyHeader ? classes.stickyHeader : classes.header);

    return (
      <header className={navClass}>
        <Video src="http://wearecolorful.net/wp-content/uploads/2017/06/1.mp4"/>
        <Sticky><Nav /></Sticky>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({ isStickyHeader: state.isStickyHeader, position :state.position });


export default connect(mapStateToProps)(injectSheet(styles)(Header));
