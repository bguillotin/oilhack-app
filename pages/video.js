import Link from 'next/link'
import Header from '../js/components/Header';
import Footer from '../js/components/Footer';
import 'isomorphic-unfetch';
import { setVideoList } from '../js/action';
import { connect } from 'react-redux';
import { mapVideoListUrl } from '../js/utils/video-utils';

class Video extends React.PureComponent {
  async componentDidMount() {
    if (!this.props.videoList || this.props.videoList.length === 0 ) {
      const res = await fetch('/vimeo');
      const json = await res.json();

      // Set State with video list and proper Url. 
      this.props.setVideoList(mapVideoListUrl(json.data));
    }
  }

  render() {
      return (
        <div>
          <Header/>
          <p>This is the Videos page</p>
          <p>The number of Videos is :: { this.props.videoList ? this.props.videoList.length : 0 }</p>
        
          <ul>
            { this.props.videoList.map((element) => <li key={element.uri}><Link href={element.url}><a target="_blank">{element.name}</a></Link></li>)}
          </ul>
          <Link href='/'><a>Go home</a></Link>
          <Footer/>
        </div>
      );
  }
}

const mapDispatchToProps = (dispatch) => ({ setVideoList: (videoList) => dispatch(setVideoList(videoList)), })

const mapStateToProps = (state) => ({ videoList: state.videoList, })

export default connect(mapStateToProps, mapDispatchToProps)(Video);