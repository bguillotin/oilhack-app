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
      background: "white",
      color: "black",
      width: "100%",
      height: "50px",
      position: "fixed",
      zIndex: "60",
      top: props => props.position,
    },

  }, 
};
