import { connect } from 'react-redux';
import { setVersion } from '../action';

class Footer extends React.PureComponent {
    async componentDidMount() {
        if (!this.props.version) {
            const res = await fetch('/version');
            const json = await res.json();
            this.props.setVersion(json.version);
        }
    }

    render() {
        return(
            <div>Here I am the footer // Web Site made by ArtFactWeb // version:{this.props.version}</div>
        )
    }
}
// Equivalent to next Line.
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setVersion : (version) => dispatch(setVersion(version)),
//     };
// };

const mapDispatchToProps = (dispatch) => ({
    setVersion : (version) => dispatch(setVersion(version)),
});

const mapStatesToProps = (state) => ({
    version: state.version,
});

export default connect(mapStatesToProps, mapDispatchToProps)(Footer);