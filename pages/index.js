import Header from '../js/Header';
import Footer from '../js/Footer';
import Vimeo from '@u-wave/react-vimeo';
// import io from 'socket.io-client';
import 'isomorphic-unfetch';

class Home extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            version: '',
        };
    }

    render() {
        return (    
            <div>
                <Header/>
                <p>Welcome to Oilhack Website ! Running now on node Server with the lastest videos !!</p>
                <Vimeo video="293552637" autoplay muted={true} loop={true}/>
                <Footer version={this.state.version}/>
            </div>
        )
    }
}

export default Home;