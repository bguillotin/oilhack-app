export default {
  title: {
    "&.dark": {
      color: "white",
    },
    color: "black",
    position: "absolute",
    margin: "auto",
    top: "30px",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "32px",
  },
  header: {
    "&.sticky": {
      "& nav": {
        background: "black",
        color: "white",
        width: "100%",
        height: "50px",
        position: "fixed",
        zIndex: "60",
        top: props => props.position,
      },  
    }
  },
};
