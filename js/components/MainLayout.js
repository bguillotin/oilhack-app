import Header from "./Header";
import Footer from "./Footer";
import injectSheet from "react-jss";
// import back from './back.jpg';

const styles = {
  mainDiv: {
  },
  header: {
    display: "block",
   
  },
  section: {
    height: "1000px",
    backgroundColor: "#57EEF5",
  },
  footer: {
    
  }
};

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
