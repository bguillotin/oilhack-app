import Header from '../js/components/Header';
import Footer from '../js/components/Footer';
import Vimeo from '@u-wave/react-vimeo';
import { connect } from 'react-redux';
import 'isomorphic-unfetch';
import { ACTION_TYPES } from '../js/constants/constants';

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (    
            <div>
                <Header/>
                <p>Welcome to Oilhack Website ! Running now on node Server with the lastest videos !!</p>
                <Vimeo video="293552637" autoplay muted={true} loop={true}/>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ version: state.version });

// export default Home;
export default connect(mapStateToProps)(Home);