import Link from "next/link";
import MainLayout from "../js/components/MainLayout";
import Viewer from 'react-images-viewer'
import { connect } from "react-redux";
import { setBoardList, setImageListByBoardId } from "../js/action";
import { loadBoards, loadImageListByBoardId } from "../js/utils/image-utils";
import "isomorphic-unfetch";
import injectSheet from "react-jss";
import cx from "classnames";

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
        width: "min-content",
        "&:hover": {
          background: "grey"
        }
      }
    }
  },
  divImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& span": {
      position: "absolute",
      color: "white"
    },
    "& img:hover": {
      opacity: "0.1",
      transition: "opacity 0.7s ease-out",
    }
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
        width: "min-content",
        margin: "6px",
        "&:hover": {
          background: "grey"
        }
      }
    }
  }
};

class Gallery extends React.PureComponent {
  constructor(props) {
    super(props);

    this.loadBoardImages = this.loadBoardImages.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoNext = this.gotoNext.bind(this);

    this.state = {
      isLoadingBoards: false,
      boardId: 0,
      isLoadingBoardImages: false,
      boardIndex: 0,
      boardName: "",
      imageArray: [],
      hoverId: -1,
      visible: false,
      imageList: [],
      imageListLength: 0,
      currImg: 0,
    };
  }

  async loadBoardImages(boardId, boardName) {
    this.setState({ isLoadingBoards: true, boardName });
    await loadImageListByBoardId(this.props, boardId);
    //[{ src: 'http://example.com/img1.jpg' }, { src: 'http://example.com/img2.png' }]
    const imageList = this.props.imageList.reduce((acc, element) => {
      acc.push({ src: element.image.original.url});
      return acc;
    }, []);
    
    this.setState({ imageListLength:this.props.nbImage, visible: true, isLoadingBoards: false, imageList });
  }

  async componentDidMount() {
    this.setState({ isLoadingBoards: true });
    await loadBoards(this.props);
    this.setState({ isLoadingBoards: false });
  }

  gotoPrevious() {
    this.setState({currImg : this.state.currImg -1});
  }

  gotoNext () {
    this.setState({currImg : this.state.currImg +1});
  }
  render() {
    const { classes } = this.props;

    return (
      <MainLayout>
        <div className={classes.main}>
          <ul>
            {" "}
            {this.props.boardList &&
              this.props.boardList.length > 0 &&
              this.props.boardList.map((x, index) => (
                <li
                  onMouseOver={() => this.setState({ hoverId: x.id })}
                  key={index}
                  onClick={() => this.loadBoardImages(x.id, x.name)}
                >
                  <a>
                    <div className={classes.divImage}>
                      <img src={x.image.medium.url} />
                      {x.id === this.state.hoverId && (
                        <span>
                          <b>{x.name}</b>
                        </span>
                      )}
                    </div>
                  </a>
                </li>
              ))}
          </ul>
        </div>
        { this.props.imageList &&
          this.props.imageList.length > 0 &&
          <Viewer
            imgs={this.state.imageList }
            currImg={this.state.currImg}
            isOpen={this.state.visible}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            onClose={() => this.setState({ visible: false })}
          />
        }

        <Link href="/">
          <a>Home</a>
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
