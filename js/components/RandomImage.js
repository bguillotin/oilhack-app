import injectSheet from 'react-jss';
import styles from './jss/random-image-style';

import backgroundImage0 from '../../static/images/background0.jpg';
import backgroundImage1 from '../../static/images/background1.png';
import backgroundImage2 from '../../static/images/background2.png';
import backgroundImage3 from '../../static/images/background3.png';

import ImageToScroll from './ImageToScroll';

const nbImages = 4;

class RandomImage extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            imgRandomId: this.randomInt(nbImages),
            colorRandom: ["#FFF2FC", "#ED30CA", "#30ED64"],
            classes: props.classes,
        }

        this.scrollTo = this.scrollTo.bind(this);
    }

    scrollTo() {
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
                { this.state.imgRandomId === 3 ? (<img className={classes.img} src={backgroundImage3}></img>) : undefined }

                <div className={classes.scrollTo} onClick={this.scrollTo}>
                    <ImageToScroll {...this.state} />
                </div>
            </React.Fragment>
        )
    }
}

export default injectSheet(styles)(RandomImage);