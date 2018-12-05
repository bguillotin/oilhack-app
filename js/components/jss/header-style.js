export default {
  header: {
    backgroundColor: "#57EEF5",
    height: "200px"
  },
  stickyHeader: {
    "& nav": {
      background:
        "linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)",
      width: "100%",
      height: "50px",
      position: "fixed",
      top: "0",
      zIndex: "60",
      //transition: "opacity 1s cubic-bezier(0.35, 0.14, 0.58, 1)",
      '-webkit-transform-origin-y': "top",
    }
  }
};
