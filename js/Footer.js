class Footer extends React.PureComponent {
    constructor() {
        super();
    }

    render() {
        return(
            <div>Here I am the footer // Web Site made by ArtFactWeb // version:{this.props.version}</div>
        )
    }
}

export default Footer;