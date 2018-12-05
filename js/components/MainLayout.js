import Header from './Header';
import Footer from './Footer';
import injectSheet from 'react-jss';
import styles from './jss/main-layout-style';

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
