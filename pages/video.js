import MainLayout from "../js/components/MainLayout";
import Link from "next/link";
import { setVideoList } from "../js/action";
import { connect } from "react-redux";
import { loadData } from "../js/utils/video-utils";
import VideoSlider from "../js/components/VideoSlider";

class Video extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  async componentWillMount() {
    this.setState({ isLoading: true });
    await loadData(this.props);
    this.setState({ isLoading: false });
  }

  render() {
    const { classes } = this.props;

    return (
      <MainLayout>
        {this.state.isLoading ? undefined : <VideoSlider />}
        <Link href="/">
          <a>Go home</a>
        </Link>
      </MainLayout>
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
)(Video);
