import MainLayout from '../js/components/MainLayout'
import Vimeo from '@u-wave/react-vimeo';
import Link from 'next/link'
import 'isomorphic-unfetch';
import { setVideoList } from '../js/action';
import { connect } from 'react-redux';
import { mapVideoListUrl } from '../js/utils/video-utils';
import injectSheet from 'react-jss';
import styles from './jss/video-style';

class Video extends React.PureComponent {
  constructor(props) {
    super(props);
    this.changeVideoIndex = this.changeVideoIndex.bind(this);
    this.loadData = this.loadData.bind(this);

    this.state = {
      isLoading: true,
      slideIndex: 0,
    }
  }

    _setInitialState () {
      let sliderSettings = config.sliderSettings;
      sliderSettings.slideCount = this.props.videoData ? this.props.videoData.length : 0;

      return {settings: sliderSettings};
    }

  async componentDidMount() {
    await this.loadData();
    this.setState({ isLoading : false});
  }

  async loadData() {
    if (!this.props.videoList || this.props.videoList.length === 0 ) {
      const res = await fetch('/vimeo');
      const json = await res.json();

      // Set State with video list and proper Url. 
      const videoList = mapVideoListUrl(json.data);
      this.props.setVideoList(videoList);
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
          { (this.props.videoList || []).map((video, index) => (<div key={index}><Vimeo video={video.id}  muted={true} loop={true}/></div>) )}
          <Link href='/'><a>Go home</a></Link>
        </MainLayout>
      );
  }
}

const mapDispatchToProps = (dispatch) => ({ setVideoList: (videoList) => dispatch(setVideoList(videoList)), })
const mapStateToProps = (state) => ({ videoList: state.videoList, })

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Video));