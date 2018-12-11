import Header from './Header';
import Head from 'next/head';

import Footer from './Footer';
import injectSheet from 'react-jss';
import styles from './jss/main-layout-style';
import classNames from 'classnames';

class MainLayout extends React.PureComponent {
  render() {
    const {classes} = this.props;

    return (            
      <div id="main" className={classes.mainDiv}>
        <Header/>
        <section className={classes.section}>{this.props.children}</section>
        <Footer/>
      </div>
    );
  }
}

export default injectSheet(styles)(MainLayout);
