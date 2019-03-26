export default {
    videoSlider: {
        marginTop: "50px",
        "& ul": {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            "& li": {
                textDecoration: "none",
                "&.show": {
                    position: "static",
                    opacity: 1,
                    transition: "opacity 1s linear",
                },
                "&.hidden": {
                    position: "absolute",
                    opacity: 0,
                    zIndex: "-12",
                },
            },
        },
        "& a": {
            "&.hidden": {
                visibility: "hidden",
            },
        },
        "& a:hover": {
            cursor: "pointer",
        },

    },
}