import Video from "./Video";
import { connect } from "react-redux";
import { setVersion } from "../action";
import { LINKS } from "../constants/links-const";
import instaLogo from "../../static/images/instagram-logo.png";
import pinterestLogo from "../../static/images/pinterest-logo.png";
import vimeoLogo from "../../static/images/vimeo-logo.png";
import injectSheet from "react-jss";
import styles from "./jss/footer-style";

class Footer extends React.PureComponent {
  async componentDidMount() {
    if (!this.props.version) {
      const res = await fetch("/version");
      const json = await res.json();
      this.props.setVersion(json.version);
    }
  }

  render() {
    const { classes } = this.props;
    // <Video src="http://wearecolorful.net/wp-content/uploads/2017/06/1.mp4" />

    return (
      <footer className={classes.footer}>
        <p> Web Site made by ArtFactWeb - v.{this.props.version}</p>
        <div className={classes.links}> 
          <a className={classes.instaLogo} href={LINKS.INSTA_LINK} target="_blank">
            <img src={instaLogo} />
          </a>          
          <a className={classes.pinterestLogo} href={LINKS.PINTEREST_LINK} target="_blank">
            <img src={pinterestLogo} /> 
          </a>
          <a className={classes.vimeoLogo} href={LINKS.VIMEO_LINK} target="_blank">
            <img src={vimeoLogo} /> 
          </a>
        </div>
      </footer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setVersion: version => dispatch(setVersion(version))
});
const mapStateToProps = state => ({ version: state.version });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectSheet(styles)(Footer));
