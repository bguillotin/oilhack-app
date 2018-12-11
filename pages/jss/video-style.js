export default {
    p: {
        color: "white",
    },
    section: {
        backgroundImage: "url('../../static/images/loupe.jpg')",
        height: "2000px",
        color: "white",
        "& ul": {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            "& li": {
                
            },
            "& button": {
                marginRight: "12px",
                marginLeft: "12px",
            },
            "showButton": {
                color: "blue"
            },
            "hideButton": {
                backgroundColor: "#cccccc",
                color: "#666666",
            },
        },
    },
    show: {
        opacity: 1,
    },
    hidden: {
        display: "none",
        opacity: 0,
        transition: "opacity 2s",
    },


}