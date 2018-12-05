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
        "&.activeLink": {
          color: "red",
          transition: "all 0.7s ease-out",
        },
        "&.inactiveLink" : {
          color: "white",
          transition: "all 0.7s ease-out",
        },
        textDecoration: "none",
      },
      "& a:visited": {},
      "& a:hover": {
        "&.activeLink, &.inactiveLink": {
          color: "orange"
        }
      }
    }
  },
};
