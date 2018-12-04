export default {
  header: {
    backgroundColor: "#57EEF5",
    height: "200px"
  },
  stickyHeader: {
    "& nav": {
      //   transform: "translate3d(0px, 100%, 0px)",
      width: "100%",
      position: "fixed",
      top: "0",
      zIndex: "60",
      backgroundColor: "black"
    }
  },
  nav: {
    position: "absolute",
    height: "auto",
    width: "100%",
    top: "50px",
    color: "white"
  },
  topMenu: {
    display: "flex",
    listStyle: "none",
    justifyContent: "flex-end",
    marginRight: "24px",
    "& li": {
      marginRight: "12px",
      "& a": {
        textDecoration: "none"
      },
      "& a:visited": {},
      "& a:hover": {
        color: "orange"
      }
    }
  },
  activeLink: {
    color: "red"
  },
  inactiveLink: {
    color: "white"
  }
};
