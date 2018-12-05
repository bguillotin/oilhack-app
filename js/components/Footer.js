import Video from './Video';
import { connect } from 'react-redux';
import { setVersion } from '../action';
import injectSheet from 'react-jss';
import styles from './jss/footer-style';

class Footer extends React.PureComponent {
    async componentDidMount() {
        if (!this.props.version) {
            const res = await fetch('/version');
            const json = await res.json();
            this.props.setVersion(json.version);
        }
    }

    render() {
        const {classes} = this.props;

        return (
            <footer className={classes.footer}>
                Here I am the footer // Web Site made by ArtFactWeb // version:{this.props.version}
                <Video src="http://wearecolorful.net/wp-content/uploads/2017/05/10.mp4"/>
            </footer>);
    }
}

const mapDispatchToProps = (dispatch) => ({ setVersion : (version) => dispatch(setVersion(version)), });
const mapStateToProps = (state) => ({ version: state.version, });

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Footer));