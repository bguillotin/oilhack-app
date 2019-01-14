import Header from './Header';
import Footer from './Footer';
import injectSheet from 'react-jss';
import styles from './jss/main-layout-style';
import { withRouter } from 'next/router';

const JSS = {
  SECTION: 'section',
}


class MainLayout extends React.PureComponent {
  render() {
    let classSection = JSS.SECTION;
    const { classes, router } = this.props;
    const { pathname } = router;
    const jssAttribut = pathname.slice(1).charAt(0).toUpperCase().concat(pathname.slice(2)).split("/")[0];

    if (classes[JSS.SECTION.concat(jssAttribut)]) {
      classSection = JSS.SECTION.concat(jssAttribut)
    }

    return (            
      <div id="main" className={classes.mainDiv}>
        <Header/>
        <section className={classes[classSection]}>{this.props.children}</section>
        <Footer/>
      </div>
    );
  }
}

export default injectSheet(styles)(withRouter(MainLayout));
