import injectSheet from 'react-jss';
import styles from './jss/random-image-style';

import backgroundImage0 from '../../static/images/background0.jpg';
import backgroundImage1 from '../../static/images/background1.jpg';
import backgroundImage2 from '../../static/images/background2.jpg';


class RandomImage extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            imgRandomId: this.randomInt(3),
        }
        console.log('Here is random image ::: ', this.state.imgRandomId);
    }

    randomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                { this.state.imgRandomId === 0 ? (<img className={classes.img} src={backgroundImage0}></img>) : undefined}
                { this.state.imgRandomId === 1 ? (<img className={classes.img} src={backgroundImage1}></img>) : undefined}
                { this.state.imgRandomId === 2 ? (<img className={classes.img} src={backgroundImage2}></img>) : undefined}
            </React.Fragment>
        )
    }
}

export default injectSheet(styles)(RandomImage);