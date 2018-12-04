export default {
  nav: {
    position: "absolute",
    height: "auto",
    width: "100%",
    top: "50px",
    color: "white",
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
