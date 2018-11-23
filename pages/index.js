import Header from '../js/Header';
import Footer from '../js/Footer';
import io from 'socket.io-client';
import 'isomorphic-unfetch';

class Home extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            version: '',
        };
    }

    async componentDidMount() {
        this.socket = io();
        this.socket.on('now', data => {
            this.setState({
                version: data.message,
            });
        });

        const res = await fetch('https://api.github.com/repos/developit/preact');
        const json = await res.json();

        this.setState({ stars: json.stargazers_count});
    }

    render() {
        return (    
            <div>
                <Header/>
                <p>Welcome to Oilhack Website ! Running now on node Server with <b>{this.state.stars}</b> stars!!</p>
                <p><img src="/static/images/screenshot.png"></img></p>
                <Footer version={this.state.version}/>
            </div>
        )
    }
}

export default Home;