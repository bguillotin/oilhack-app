import MainLayout from '../js/components/MainLayout'
import Vimeo from '@u-wave/react-vimeo';
import Link from 'next/link'
import 'isomorphic-unfetch';
import { setVideoList } from '../js/action';
import { connect } from 'react-redux';
import { mapVideoListUrl } from '../js/utils/video-utils';
import injectSheet from 'react-jss';
import styles from './jss/video-style';
import Carousel from 'nuka-carousel';
// import Loader from 'react-loader-spinner';

class Video extends React.PureComponent {
  constructor(props) {
    super(props);
    this.changeVideoIndex = this.changeVideoIndex.bind(this);

    this.state = {
      isLoading: true,
      slideIndex: 0,
    }
  }

  async componentDidMount() {
    if (!this.props.videoList || this.props.videoList.length === 0 ) {
      const res = await fetch('/vimeo');
      const json = await res.json();

      // Set State with video list and proper Url. 
      this.props.setVideoList(mapVideoListUrl(json.data));
      this.setState({ isLoading : false});
    }
  }

  changeVideoIndex(videoIndex) {
    this.setState({slideIndex :videoIndex})
  }

  render() {
      const {classes} = this.props;
      const childClasses = { classes };
      return (
        <MainLayout {...childClasses}>
          { this.state.isLoading ? "Loading" : "Videos are loaded !!" }
          <p>Here is slide Index ::: {this.state.slideIndex}</p>
          <p className={classes.p}>This is the Videos page</p>
          { !this.state.isLoading ? (<Carousel className={classes.carousel} pauseOnHover={true}  
            framePadding={"200px 500px"}
            slideIndex={this.state.slideIndex}
            afterSlide={(slideIndex) => this.changeVideoIndex(slideIndex)}
            renderAnnounceSlideMessage={({ currentSlide, slideCount }) => `Slide ${currentSlide + 1} of ${slideCount}`}>
            { (this.props.videoList || []).map((video, index) => (<Vimeo video={video.id} autoplay={this.state.slideIndex === index} key={index} muted={true} loop={true}/>))}
          </Carousel>) : undefined } 
          {/* (<Loader type="Puff" color="#00BFFF" height="100"width="100"/>)  */}
          <Link href='/'><a>Go home</a></Link>
        </MainLayout>
      );
  }
}

const mapDispatchToProps = (dispatch) => ({ setVideoList: (videoList) => dispatch(setVideoList(videoList)), })
const mapStateToProps = (state) => ({ videoList: state.videoList, })

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Video));