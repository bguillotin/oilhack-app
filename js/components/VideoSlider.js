import { connect } from "react-redux";
import Vimeo from "@u-wave/react-vimeo";
import injectSheet from "react-jss";
import styles from "./jss/video-slider-style";
// PNG
import arrowLeft from "../../static/images/left-arrow.png";
import arrowRight from "../../static/images/right-arrow.png";

class VideoSlider extends React.PureComponent {
  constructor(props) {
    super(props);

    this.changeVideoIndex = this.changeVideoIndex.bind(this);
    this.getStyledShow = this.getStyledShow.bind(this);
    this.changeButtonShowStatus = this.changeButtonShowStatus.bind(this);
    this.goPrevious = this.goPrevious.bind(this);
    this.goNext = this.goNext.bind(this);

    this.state = {
      slideIndex: 0,
      sliderButtonStatus: {
        nextIsShown: true,
        previousIsShow: false
      }
    };
  }

  changeVideoIndex(videoIndex, callback) {
    this.setState({ slideIndex: videoIndex }, callback);
  }

  changeButtonShowStatus(previousIsShown, nextIsShown) {
    this.setState({
      sliderButtonStatus: {
        previousIsShow: previousIsShown,
        nextIsShown: nextIsShown
      }
    });
  }

  getStyledShow(isShown) {
    return isShown ? "show" : "hidden";
  }

  goPrevious() {
    const { slideIndex } = this.state;

    if (slideIndex > 0) {
      this.changeVideoIndex(slideIndex - 1, () => {
        slideIndex === 0
          ? this.changeButtonShowStatus(false, true)
          : this.changeButtonShowStatus(true, true);
      });
    }
  }

  goNext() {
    const { slideIndex } = this.state;
    // Mute previous video in case it is running.
    this.props.videoList.get(slideIndex).muted = true;

    if (slideIndex < this.props.nbVideo - 1) {
      this.changeVideoIndex(slideIndex + 1, () => {
        slideIndex === this.props.nbVideo - 1
          ? this.changeButtonShowStatus(true, false)
          : this.changeButtonShowStatus(true, true);
      });
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div id="video-slider" className={classes.videoSlider}>
        <ul>
          <a onClick={this.goPrevious} className={this.getStyledShow(this.state.sliderButtonStatus.previousIsShow)}>
            <img src={arrowLeft} />
          </a>
          {(this.props.videoList || []).map((video, index) => (
            <li
              className={this.getStyledShow(this.state.slideIndex === index)}
              key={index}
            >
              <Vimeo video={video.id} height="540px" muted={video.muted} loop={true} />
            </li>
          ))}
          <a onClick={this.goNext} className={this.getStyledShow(this.state.sliderButtonStatus.nextIsShown)}>
            <img src={arrowRight} />
          </a>
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setVideoList: (videoList, length) => {
    dispatch(setVideoList(videoList, length));
  }
});
const mapStateToProps = state => ({
  videoList: state.videoList,
  nbVideo: state.nbVideo
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectSheet(styles)(VideoSlider));
