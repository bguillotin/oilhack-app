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
      marginRight: "12px",
      "& a": {
        color: "black",
        transition: "all 0.7s ease-out",
        textDecoration: "none",
        "&.darkTheme, &.sticky" : {
          color: "white",
          transition: "all 0.7s ease-out",
          "&:hover": {
            color: "#EDAC30",
          }
        },
        "&.activeLink": {
          color: "#EDAC30",
        },
      },
      "& a:hover": {
        color: "#EDAC30",
      },
    },
  },
};
