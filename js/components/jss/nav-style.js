export default {
  title: {
    display: "none",
    letterSpacing: "15px",
    cursor: "pointer",
    "&.sticky": {
      display: "block",
      position: "absolute",
      fontSize: "25px",
      margin: "12px",
    },
  },
  nav: {
    position: "absolute",
    height: "50px",
    width: "100%",
    transition: "all 0.7s ease-in",
  },
  topMenu: {
    display: "flex",
    listStyle: "none",
    justifyContent: "flex-end",
    letterSpacing: "2px",
    marginRight: "24px",
    "& li": {
      color: "black",
      marginRight: "12px",
      "&.dark, &.sticky" : {
        color: "white",
        transition: "all 0.7s ease-out",
      },
      "& a": {
        transition: "all 0.7s ease-out",
        textDecoration: "none",
        "&.activeLink": {
          color: "#EDAC30",
          transition: "all 0.7s ease-out",
        },
      },
      "& a:hover": {
        color: "#EDAC30",
      },
    }
  },
};
