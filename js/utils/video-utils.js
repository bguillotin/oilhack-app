import { VIMEO_CST } from "../constants/vimeo-cst";
import { Seq } from 'immutable';
import 'isomorphic-unfetch';

// Filter videos without word OF in Title and Map uri to create finale Vimeo url.
const mapVideoListUrl = (videoList) => {
  const lazySeq = Seq(videoList);
  return lazySeq
    .map(element => {
      let videoId = element.uri.split(/\//)[2];
  
      const newProperty = {
        url: VIMEO_CST.DOMAIN.concat(videoId),
        id: videoId,
        muted: false,
      };
      // Assign a new property to each element.
      return Object.assign(element, newProperty);
    });
};

export const loadData = async (props) => {
    if (!props.videoList || props.videoList.length === 0 ) {
      const res = await fetch('/vimeo');
      if (res.status !== 200) {
        props.setVideoList([], 0);
      } else {
        const json = await res.json();
        // Set State with video list and proper Url. 
        const videoList = mapVideoListUrl(json.data);
        props.setVideoList(videoList, videoList.size);
      }
    }
}
