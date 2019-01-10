import Link from "next/link";
import MainLayout from "../js/components/MainLayout";
import { connect } from "react-redux";
import { setBoardList, setImageListByBoardId } from "../js/action";
import { loadBoards, loadImageListByBoardId } from "../js/utils/image-utils";
import "isomorphic-unfetch";
import injectSheet from "react-jss";

const styles = {
  main: {
    "& p": {
      color: "yellow"
    },
    "& ul": {
      display: "flex",
      flexWrap: "wrap",
      listStyle: "none",
      padding: "0 12px",
      justifyContent: "center",
      "& li": {
        cursor: "pointer",
        padding: "12px",
        background: "#E3BBFD",
        width: "min-content",
        margin: "12px",
        borderRadius: "12px",
        "&:hover": {
          background: "orange"
        }
      }
    },
  }, 
  child: {
    "& h1": {
      textAlign: "center"
    },
    "& ul": {
      display: "flex",
      flexWrap: "wrap",
      listStyle: "none",
      padding: "0 6px",
      justifyContent: "center",
      "& li": {
        cursor: "pointer",
        padding: "6px",
        background: "#E3BBFD",
        width: "min-content",
        margin: "6px",
        borderRadius: "6px",
        "&:hover": {
          background: "orange"
        }
      }
    },
  }
};

class Gallery extends React.PureComponent {
  constructor(props) {
    super(props);

    this.loadBoardImages = this.loadBoardImages.bind(this);

    this.state = {
      isLoadingBoards: false,
      boardId: 0,
      isLoadingBoardImages: false,
      boardIndex: 0,
      boardName: "",
      imageArray: [],
      visible: false
    };
  }

  async loadBoardImages(boardId, boardName) {
    this.setState({ isLoadingBoards: true, boardName });
    await loadImageListByBoardId(this.props, boardId);
    this.setState({ isLoadingBoards: false });
  }

  async componentDidMount() {
    this.setState({ isLoadingBoards: true });
    await loadBoards(this.props);
    this.setState({ isLoadingBoards: false });
  }

  render() {
    const { classes } = this.props;

    return (
      <MainLayout>
        {/* {this.state.isLoading ? "Data is Loading" : "Data loaded"} */}
        <div className={classes.main}>
          <p className={classes.p}>This is the Gallery page</p>
          <ul className={classes.ul}>
            {" "}
            {this.props.boardList &&
              this.props.boardList.length > 0 &&
              this.props.boardList.map((x, index) => (
                <li
                  className={classes.li}
                  key={index}
                  onClick={() => this.loadBoardImages(x.id, x.name)}
                >
                  <a>
                    <div>
                      <img src={x.image.medium.url} />
                    </div>
                    <div>{x.name}</div>
                  </a>
                </li>
              ))}
          </ul>
        </div>

        <div className={classes.child}>
          {this.state.boardName && (
            <h1>
              {this.state.boardName} # {this.props.nbImage}
            </h1>
          )}
          <ul className={classes.ul}>
            {this.props.imageList &&
              this.props.imageList.length > 0 &&
              this.props.imageList.map((x, index) => (
                <li className={classes.li} key={x.index}>
                  <img src={x.image.medium.url} />
                </li>
              ))}
          </ul>
        </div>

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
  },
  setImageListByBoardId: (imageList, nbImage, boardId) => {
    dispatch(setImageListByBoardId(imageList, nbImage, boardId));
  }
});

const mapStateToProps = state => ({
  boardList: state.boardList,
  nbBoard: state.nbBoard,
  imageList: state.imageList,
  boardId: state.boardId,
  nbImage: state.nbImage
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectSheet(styles)(Gallery));
