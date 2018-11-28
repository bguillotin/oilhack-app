import { VIMEO } from "../constants/vimeo-cst";

// Map uri to create finale Vimeo url.
export const mapVideoListUrl = videoList => {
  return videoList.map(element => {
    let videoId = element.uri.split(/\//)[2];

    const newProperty = {
      url: VIMEO.DOMAIN.concat(videoId),
      id: videoId
    };
    // Assign a new property to each element/
    return Object.assign(element, newProperty);
  });
};
