import Header from './Header';
import Footer from './Footer';
import injectSheet from 'react-jss';
import styles from './jss/main-layout-style';
import classNames from 'classnames';

class MainLayout extends React.PureComponent {
  render() {
    const {classes} = this.props;
    const sectionChildClassName = classNames(this.props.classes.sectionChild ? this.props.classes.sectionChild : classes.section);

    return (
      <div id="main" className={classes.mainDiv}>
        <Header/>
        <section className={sectionChildClassName}>{this.props.children}</section>
        <Footer/>
      </div>
    );
  }
}

export default injectSheet(styles)(MainLayout);
