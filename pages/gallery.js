import Link from "next/link";
import MainLayout from "../js/components/MainLayout";
import { connect } from "react-redux";
import { setBoardList } from "../js/action";
import { loadBoards } from "../js/utils/image-utils";
import "isomorphic-unfetch";
import injectSheet from "react-jss";

const styles = {
  p: {
    color: "yellow"
  },
  ul: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
  },
  li: {
    padding: "0 12px 12px 0"
  }
};

class Gallery extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
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
        {/* {this.state.isLoading ? "Data is Loading" : "Data loaded"} */}
        <p className={classes.p}>This is the Gallery page</p>
        <ul className={classes.ul}>
          {" "}
          {this.props.boardList &&
            this.props.boardList.length > 0 &&
            this.props.boardList.map((x, index) => (
              <li className={classes.li} key={index}>
                <a href={"/gallery/detail?id=" + x.id + "&index=" + index + "&name=" + x.name }>
                  <div>
                    <img src={x.image.medium.url} />
                  </div>
                  <div>{x.name}</div>
                </a>
              </li>
            ))}
        </ul>

        <Link href="/">
          <a>Go home</a>
        </Link>
      </MainLayout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setBoardList: (boardList, nbBoard) => {
    dispatch(setBoardList(boardList, nbBoard));
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
