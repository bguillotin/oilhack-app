class Video extends React.PureComponent {
    render() {
        const { src } = this.props;
        return (
            <video autoPlay loop="loop" width="100%" height="200" src={src}>
                <source type="video/mp4" src={src}/>
            </video>
        );
    }
}

export default Video;