export default {
    videoSlider: {
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
            "&.hide": {
                visibility: "hidden",
            },
        },
        "& a:hover": {
            cursor: "pointer",
        },

    },
}