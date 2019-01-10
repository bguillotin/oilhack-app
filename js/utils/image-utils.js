import "isomorphic-unfetch";
import { Seq } from "immutable";

// const mapBoardList = (boardList) => {
//     const lazySeq = Seq(boardList);
//     return lazySeq.map(element => {
//       const newProperty = {
//         test: 'VIMEO_CST.DOMAIN.concat(videoId),'
//       };
//       // Assign a new property to each element.
//       return Object.assign(element, newProperty);
//     });
// }

// const mapImageList = (imageList) => {
//   const lazySeq = Seq(imageList);
//   return lazySeq;
// }

export const loadBoards = async props => {
  if (!props.boardList || props.boardList.length === 0) {
    const res = await fetch("/pinterest/boards");

    if (res.status !== 200) {
      props.setBoardList([], 0);
    } else {
      const data = await res.json();
      props.setBoardList(data, data.length);
    }
  }
};

export const loadImageListByBoardId = async (props, boardId) => {
  const res = await fetch("/pinterest/board/".concat(String(boardId)));

  if (res.status !== 200) {
    console.log("An error occured ::", res);
    props.setImageListByBoardId([], 0, boardId);
  } else {
    const data = await res.json();
    // const imageList = mapImageList(json.data);
    props.setImageListByBoardId(data, data.length, boardId);
  }
};
