export default {
  title: {
    color: "white",
    position: "absolute",
    margin: "auto",
    top: "30px",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "32px",
  },
  header: {
    backgroundColor: "#57EEF5",
  },
  stickyHeader: {
    "& nav": {
      background:
        "linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)",
      width: "100%",
      height: "50px",
      position: "fixed",
      zIndex: "60",
      top: props => props.position,
    }
  }, 
};
