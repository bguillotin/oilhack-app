import MainLayout from '../js/components/MainLayout'
import Vimeo from '@u-wave/react-vimeo';
import Link from 'next/link'
import 'isomorphic-unfetch';
import { setVideoList } from '../js/action';
import { connect } from 'react-redux';
import { mapVideoListUrl } from '../js/utils/video-utils';
import injectSheet from 'react-jss';
import styles from './jss/video-style';
import classNames from 'classnames';

class Video extends React.PureComponent {
  constructor(props) {
    super(props);

    this.changeVideoIndex = this.changeVideoIndex.bind(this);
    this.loadData = this.loadData.bind(this);
    this.getStyledButton = this.getStyledButton.bind(this);
    this.changeButtonShowStatus = this.changeButtonShowStatus.bind(this);
    this.goPrevious = this.goPrevious.bind(this);
    this.goNext = this.goNext.bind(this);

    this.state = {
      isLoading: true,
      slideIndex: 0,
      sliderButtonStatus : {
        nextShow: true,
        previousShow: false,
      }
    }
  }

  async componentDidMount() {
    await this.loadData();
    this.setState({ isLoading : false});
  }

  async loadData() {
    if (!this.props.videoList || this.props.videoList.length === 0 ) {
      const res = await fetch('/vimeo');
      if (res.status !== 200) {
        this.props.setVideoList([], 0);
      } else {
        const json = await res.json();

        // Set State with video list and proper Url. 
        const videoList = mapVideoListUrl(json.data);
        this.props.setVideoList(videoList, videoList.size);
      }

    }
  }

  changeVideoIndex(videoIndex, callback) {
    this.setState({slideIndex :videoIndex}, callback)
  }

  changeButtonShowStatus(previousIsShown, nextIsShown) {
    this.setState({sliderButtonStatus: {
      previousShow: previousIsShown,
      nextShow: nextIsShown,
    }});
  }

  getStyledButton(isShown) {
    const { classes } = this.props;
    return isShown ? classes.showButton : classes.hideButton
  }

  goPrevious() {
    if (this.state.slideIndex > 0) {
      this.changeVideoIndex(this.state.slideIndex -1, () => {
        (this.state.slideIndex === 0) ? this.changeButtonShowStatus(false, true): this.changeButtonShowStatus(true, true);
      });
    }
  }

  goNext() {
    if (this.state.slideIndex < this.props.nbVideo -1) {
      this.changeVideoIndex(this.state.slideIndex +1, () => {
        (this.state.slideIndex === this.props.nbVideo -1) ? this.changeButtonShowStatus(true, false): this.changeButtonShowStatus(true, true);
      });
    }
  }

  render() {
      const { classes } = this.props;
      
      return (
        <MainLayout {...this.props}>
          { this.state.isLoading ? "Loading" : "Videos are loaded !!" }
          <p className={classes.p}>This is the Videos page</p>
          <ul>
            <button className={ this.getStyledButton(this.state.sliderButtonStatus.previousShow) } onClick={this.goPrevious}>Previous</button>
            { (this.props.videoList || []).map((video, index) => (<li className={this.state.slideIndex === index ? classes.show : classes.hidden} key={index}><Vimeo video={video.id} muted={true} loop={true}/></li>) )}
            <button className={ this.getStyledButton(this.state.sliderButtonStatus.nextShow) } onClick={this.goNext}>Next</button>
          </ul>
          <Link href='/'><a>Go home</a></Link>
        </MainLayout>
      );
  }
}

const mapDispatchToProps = (dispatch) => ({ setVideoList: (videoList, length) => {dispatch(setVideoList(videoList, length))}, })
const mapStateToProps = (state) => ({ videoList: state.videoList, nbVideo: state.nbVideo })

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Video));