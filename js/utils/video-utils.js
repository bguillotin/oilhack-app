import { VIMEO_CST } from "../constants/vimeo-cst";
import { Seq } from 'immutable';

// Filter videos without word OF in Title and Map uri to create finale Vimeo url.
export const mapVideoListUrl = videoList => {
  const lazySeq = Seq(videoList);
  return lazySeq
    .filter((video) => {
      return !video.name.includes(VIMEO_CST.EXCLUDE_VIDEO_CONTAINING_TEXT);
    })
    .map(element => {
      let videoId = element.uri.split(/\//)[2];
  
      const newProperty = {
        url: VIMEO_CST.DOMAIN.concat(videoId),
        id: videoId
      };
      // Assign a new property to each element.
      return Object.assign(element, newProperty);
    });
};
