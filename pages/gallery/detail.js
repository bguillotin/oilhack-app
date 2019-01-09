import MainLayout from '../../js/components/MainLayout';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { setImageListByBoardId } from "../../js/action";
import { loadImageListByBoardId } from '../../js/utils/image-utils';

class Detail extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      boardId: 0,
      isLoading: false,
    };
  }

  async componentDidMount() {
    const { router } = this.props;
    let { query } = router;
    const boardId = query.id;
    console.log("Here is desired BOARD ID :: ", query.id);
    this.setState({ boardId: boardId });
    this.setState({ isLoading: true });
    await loadImageListByBoardId(this.props, boardId);
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <MainLayout>
        <h1>Here is detail gallery for ID :: {this.state.boardId}</h1>
        { (this.props.imageList && this.props.imageList.length > 0) && this.props.imageList.map((x, index) => (<p key={x.index} >{x.id}<img src={x.image.small.url} /></p>))};
      </MainLayout>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    setImageListByBoardId: (imageList, nbImage, boardId) => {
        dispatch(setImageListByBoardId(imageList, nbImage, boardId));
      },
});

const mapStateToProps = state => ({
    imageList: state.imageList,
    boardId: state.boardId
  });

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(Detail));
