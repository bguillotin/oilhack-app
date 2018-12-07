import injectSheet from 'react-jss';
import styles from './jss/random-image-style';
import { setScrolling } from '../action';
import { connect } from 'react-redux';

import backgroundImage0 from '../../static/images/background0.jpg';
import backgroundImage1 from '../../static/images/background1.jpg';
import backgroundImage2 from '../../static/images/background2.jpg';
import ImageToScroll from './ImageToScroll';


class RandomImage extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            imgRandomId: this.randomInt(3),
            colorRandom: ["#FFF2FC", "#ED30CA", "#30ED64"],
            classes: props.classes,
        }


        this.scrollTo = this.scrollTo.bind(this);
    }

    scrollTo() {
        this.props.setScrolling(true);
        window.scrollTo({
            top: this.props.refToScrollTo.offsetTop, 
            behavior: "smooth"  // Optional, adds animation
        });
    }

    randomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                { this.state.imgRandomId === 0 ? (<img className={classes.img} src={backgroundImage0}></img>) : undefined }
                { this.state.imgRandomId === 1 ? (<img className={classes.img} src={backgroundImage1}></img>) : undefined }
                { this.state.imgRandomId === 2 ? (<img className={classes.img} src={backgroundImage2}></img>) : undefined }
                <span>Is SCROLLING :: </span>
                <div className={classes.scrollTo} onClick={this.scrollTo}>
                    <ImageToScroll {...this.state} />
                </div>
            </React.Fragment>
        )
    }
}

const mapDispatchToState = (dispatch) => ({ setScrolling: (isScrolling) => dispatch(setScrolling(isScrolling)),})

export default connect(null, mapDispatchToState)(injectSheet(styles)(RandomImage));