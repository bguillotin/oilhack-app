import MainLayout from '../js/components/MainLayout'
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
    this.state = {
      isLoadind: true,
    }
  }
  async componentDidMount() {
    if (!this.props.videoList || this.props.videoList.length === 0 ) {
      const res = await fetch('/vimeo');
      const json = await res.json();

      // Set State with video list and proper Url. 
      this.props.setVideoList(mapVideoListUrl(json.data));
      this.setState({ isLoadind : false});
    }
  }

  render() {
      const {classes} = this.props;
      const childClasses = { classes };
      return (
        <MainLayout {...childClasses}>
          { this.state.isLoadind ? "Loading" : "Videos are loaded !!" }
          <p className={classes.p}>This is the Videos page</p>
          <p>The number of Videos is :: { (this.props.videoList || []).length }</p>
          <ul>
            { (this.props.videoList || []).map((element) => <li key={element.uri}><Link href={element.url}><a target="_blank">{element.name}</a></Link></li>)}
          </ul>
          <Link href='/'><a>Go home</a></Link>
        </MainLayout>
      );
  }
}

const mapDispatchToProps = (dispatch) => ({ setVideoList: (videoList) => dispatch(setVideoList(videoList)), })
const mapStateToProps = (state) => ({ videoList: state.videoList, })

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Video));