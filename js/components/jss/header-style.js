export default {
  header: {
    backgroundColor: "#57EEF5",
    height: "200px"
  },
  stickyHeader: {
    "& nav": {
      // background: "linear-gradient(90deg, #ff9800 var(--stop, 0%), #3c3c3c 0)",
      background:
        "linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)",
      width: "100%",
      height: "50px",
      position: "fixed",
      zIndex: "60",
      transform: "translate3d(0px, 0px, 0px)",
      top: props => props.position,
    }
  }, 
};
