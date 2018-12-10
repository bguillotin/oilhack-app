import Header from './Header';
import Head from 'next/head';

import Footer from './Footer';
import injectSheet from 'react-jss';
import styles from './jss/main-layout-style';
import classNames from 'classnames';

class MainLayout extends React.PureComponent {
  render() {
    const {classes} = this.props;
    const sectionChildClassName = classNames(this.props.classes.sectionChild ? this.props.classes.sectionChild : classes.section);

    return (            
    <React.Fragment>
      <Head>
          <title>Oilhack website</title>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800" rel="stylesheet" />
          <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
          <style jsx global>{`
              body { 
                  background: #000;
                  margin: 0;
                  font-family: monospace;
              }
          `}</style>
      </Head>
      <div id="main" className={classes.mainDiv}>
        <Header/>
        <section className={sectionChildClassName}>{this.props.children}</section>
        <Footer/>
      </div>
      </React.Fragment>
    );
  }
}

export default injectSheet(styles)(MainLayout);
