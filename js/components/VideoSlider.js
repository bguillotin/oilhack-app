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
    this.getStyledButton = this.getStyledButton.bind(this);
    this.changeButtonShowStatus = this.changeButtonShowStatus.bind(this);
    this.goPrevious = this.goPrevious.bind(this);
    this.goNext = this.goNext.bind(this);

    this.state = {
      slideIndex: 0,
      sliderButtonStatus: {
        nextShow: true,
        previousShow: false
      }
    };
  }

  changeVideoIndex(videoIndex, callback) {
    this.setState({ slideIndex: videoIndex }, callback);
  }

  changeButtonShowStatus(previousIsShown, nextIsShown) {
    this.setState({
      sliderButtonStatus: {
        previousShow: previousIsShown,
        nextShow: nextIsShown
      }
    });
  }

  getStyledButton(isShown) {
    return isShown ? "" : "hide";
  }

  goPrevious() {
    if (this.state.slideIndex > 0) {
      this.changeVideoIndex(this.state.slideIndex - 1, () => {
        this.state.slideIndex === 0
          ? this.changeButtonShowStatus(false, true)
          : this.changeButtonShowStatus(true, true);
      });
    }
  }

  goNext() {
    // Mute previous video in case it is running.
    this.props.videoList.get(this.state.slideIndex).muted = true;

    if (this.state.slideIndex < this.props.nbVideo - 1) {
      this.changeVideoIndex(this.state.slideIndex + 1, () => {
        this.state.slideIndex === this.props.nbVideo - 1
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
          <a onClick={this.goPrevious} className={this.getStyledButton(this.state.sliderButtonStatus.previousShow)}>
            <img src={arrowLeft} />
          </a>
          {(this.props.videoList || []).map((video, index) => (
            <li
              className={this.state.slideIndex === index ? "show" : "hidden"}
              key={index}
            >
              <Vimeo video={video.id} height="540px" muted={video.muted} loop={true} />
            </li>
          ))}
          <a onClick={this.goNext} className={this.getStyledButton(this.state.sliderButtonStatus.nextShow)}>
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
