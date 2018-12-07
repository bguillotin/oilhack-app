class Video extends React.PureComponent {
    render() {
        const { src, key } = this.props;
        return (
            <video key= {key} autoPlay loop="loop" width="100%" height="200" src={src}>
                <source type="video/mp4" src={src}/>
            </video>
        );
    }
}

export default Video;