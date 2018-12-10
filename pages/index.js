import Vimeo from '@u-wave/react-vimeo';
import MainLayout from '../js/components/MainLayout';
import injectSheet from 'react-jss';
import RandomImage from '../js/components/RandomImage';

// export default Index;
class Index extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            refToScrollTo: null,
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <MainLayout>
                <RandomImage refToScrollTo={this.state.refToScrollTo} />
                <span ref={ (ref) => this.setState({refToScrollTo:ref })}>Welcome to Oilhack Website ! Running now on node Server with the lastest videos !!</span>
                <Vimeo video="302238593" autoplay muted={true} loop={true}/>
            </MainLayout>
        );
    }
}


// const mapDispatchToProps = (dispatch) => {
//     return {
//         setColor: (color) => dispatch(setColor(color)),
//         setPosition: (position) => dispatch(setPosition(position)),
//     };
// }

// const mapStateToProps = (state) => ({ color: state.color, position: state.position })
// export default connect(mapStateToProps)(injectSheet(styles)(Index));
export default Index;
