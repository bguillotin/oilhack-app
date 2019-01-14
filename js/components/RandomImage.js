import injectSheet from "react-jss";
import styles from "./jss/random-image-style";

import backgroundImage0 from "../../static/images/background0.jpg";
import backgroundImage1 from "../../static/images/background1.png";
import backgroundImage2 from "../../static/images/background2.png";
import backgroundImage3 from "../../static/images/background3.png";

// import ImageToScroll from "./ImageToScroll";

const nbImages = 4;
let timeOutId;

class RandomImage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      imgRandomId: this.randomInt(nbImages),
      classes: props.classes,
      imgLoaded: false
    };

    timeOutId = setTimeout(() => {
        this.setState({imgLoaded:true})
    }, 1500);

    this.scrollTo = this.scrollTo.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(timeOutId);
  }

  scrollTo() {
    window.scrollTo({
      top: this.props.refToScrollTo.offsetTop,
      behavior: "smooth" // Optional, adds animation
    });
  }

  randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  render() {
    const { classes } = this.props;
    let { imgLoaded } = this.state;

    return (
      <React.Fragment>
        {this.state.imgRandomId === 0 ? (
          <img
            onLoad={() => this.setState({ imgLoaded: true })}
            className={ imgLoaded ? classes.img : classes.imgHide }
            src={backgroundImage0}
          />
        ) : (
          undefined
        )}
        {this.state.imgRandomId === 1 ? (
          <img
            onLoad={() => this.setState({ imgLoaded: true })}
            className={ imgLoaded ? classes.img : classes.imgHide }
            src={backgroundImage1}
          />
        ) : (
          undefined
        )}
        {this.state.imgRandomId === 2 ? (
          <img
            onLoad={() => this.setState({ imgLoaded: true })}
            className={ imgLoaded ? classes.img : classes.imgHide }
            src={backgroundImage2}
          />
        ) : (
          undefined
        )}
        {this.state.imgRandomId === 3 ? (
          <img
            onLoad={() => this.setState({ imgLoaded: true })}
            className={ imgLoaded ? classes.img : classes.imgHide }
            src={backgroundImage3}
          />
        ) : (
          undefined
        )}
      </React.Fragment>
    );
  }
}

export default injectSheet(styles)(RandomImage);
