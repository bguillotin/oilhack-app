import Background from '../../static/images/back.jpg';

export default {
    p: {
        color: "white",
    },
    section: {
        backgroundImage: "url('../../static/images/loupe.jpg')",
        backgroundRepeat:"no-repeat",
        height: "2000px",
        color: "white",
        "& ul": {
            // color: "red",
            // "& li": {
            //     "& a:visited": "white",
            //     "& a:hover": "red",
            // }
        },
    },
    // "a:hover": {
    //     color: "white",
    //     textDecoration: "none",
    // }
}