import Link from 'next/link'
import Header from '../js/Header';
import Footer from '../js/Footer';
import 'isomorphic-unfetch';

class Video extends React.PureComponent {
  constructor() {
      super();
      this.state = {
          videos: [],
          total: 0,
      }
  }

  async componentDidMount() {
      const res = await fetch('/vimeo');
      const json = await res.json();
      let videos = json.data;
      videos = videos.map((element) => {
        let videoId = element.uri.split(/\//)[2];
        const newProperty = {
          url: 'https://vimeo.com/'.concat(videoId),
          id: videoId,
        }
        Object.assign(element, newProperty);
        return element;
      })
      
      this.setState({total: json.total});
      this.setState({videos: videos});
  }

  render() {
      return (
        <div>
          <Header/>
          <p>This is the Videos page</p>
          <p>The number of Videos is :: { this.state.total }</p>
        
          <ul>
            { this.state.videos.map((element) => <li key={element.uri}><Link href={element.url}><a target="_blank">{element.name}</a></Link></li>)}
          </ul>
          <Link href='/'><a>Go home</a></Link>
          <Footer/>
        </div>
      );
  }
}

export default Video;