export default {
  titleSticky: {
    position: "absolute",
    fontSize: "32px",
    marginLeft: "12px",
  },
  title: {
    display: "none",
  },
  nav: {
    position: "absolute",
    height: "50px",
    width: "100%",
    transition: "all 0.7s ease-in",
  },
  topMenuSticky: {
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
          color: "black",
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
