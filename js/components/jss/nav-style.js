export default {
  title: {
    display: "none",
    "&.sticky": {
      position: "absolute",
      fontSize: "32px",
      marginLeft: "12px",
      display: "block",
    } 
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
    marginRight: "24px",
    "& li": {
      marginRight: "12px",
      "& a": {
        "&.activeLink": {
          color: "#EDAC30",
          transition: "all 0.7s ease-out",
        },
        "&.inactiveLink" : {
          color: "black",
          transition: "all 0.7s ease-out",
          "&.dark, &.sticky" : {
            color: "white",
            transition: "all 0.7s ease-out",
          },
        },
        textDecoration: "none",
      },
      "& a:visited": {},
      "& a:hover": {
        "&.activeLink, &.inactiveLink": {
          color: "#EDAC30"
        }
      }
    }
  },
};
