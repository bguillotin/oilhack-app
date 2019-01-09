import Link from "next/link";
import MainLayout from "../js/components/MainLayout";
import { connect } from "react-redux";
import { setBoardList } from "../js/action";
import { loadBoards } from "../js/utils/image-utils";
import 'isomorphic-unfetch';
import injectSheet from "react-jss";

const styles = {
  p: {
    color: "yellow"
  }
};

class Gallery extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    }
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    await loadBoards(this.props);
    this.setState({ isLoading: false });
  }

  render() {
    const { classes } = this.props;

    return (
      <MainLayout>
        {this.state.isLoading ? "Data is Loading" : "Data loaded"}
        <p className={classes.p}>This is the Gallery page</p>
        { (this.props.boardList && this.props.boardList.length > 0) && this.props.boardList.map((x,index) => (<p key={index}>{x.name} #<a href={"/gallery/detail?id=" + x.id}><img src={x.image.small.url}/></a></p>)) }
        <Link href="/">
          <a>Go home</a>
        </Link>
      </MainLayout>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setBoardList: (boardList, nbBoard) => {
    dispatch(setBoardList(boardList, nbBoard))
  }
});

const mapStateToProps = state => ({
  boardList: state.boardList,
  nbBoard: state.nbBoard
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectSheet(styles)(Gallery));
