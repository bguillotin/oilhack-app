import Vimeo from '@u-wave/react-vimeo';
import Head from 'next/head';
import MainLayout from '../js/components/MainLayout';
import { connect } from 'react-redux';
import { setColor, setPosition } from '../js/action'
import injectSheet from 'react-jss';

const styles = {
    test: {
        color: props => props.color,
    }
}

// export default Index;
class Index extends React.PureComponent {
    constructor(props) {
        super(props);

        this.changeColor = this.changeColor.bind(this);
        this.changePosition = this.changePosition.bind(this);
        this.updatePosition = this.updatePosition.bind(this);

        this.state = {
            id: 0,
        }

    }

    changePosition() {
        this.state.id = setInterval(this.updatePosition, 30);
    }

    updatePosition() {
        if (this.props.position === 0) {
            clearInterval(this.state.id);
        } else {
            this.props.setPosition(this.props.position+1);
        }
    }


    changeColor() {
        this.props.setColor(this.props.color === 'green' ? 'red' : 'green');
    }
    

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Head>
                    <title>Oilhack website</title>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800" rel="stylesheet" />
                    <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
                    <style jsx global>{`
                        body { 
                            background: #000;
                            margin: 0;
                            font-family: monospace;
                        }
                    `}</style>
                </Head>
                <MainLayout>
                    <p>Welcome to Oilhack Website ! Running now on node Server with the lastest videos !!</p>
                    <Vimeo video="302238593" autoplay muted={true} loop={true}/>
                    <button onClick={this.changePosition} > CLICK ME position +1</button>
                    <button onClick={this.changeColor} > CLICK ME to change text color</button>
                    <span className={classes.test}> HERE IS MY TEXT </span>
                    HERE is position value :: { this.props.position }
                </MainLayout>
            </React.Fragment>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        setColor: (color) => dispatch(setColor(color)),
        setPosition: (position) => dispatch(setPosition(position)),
    };
}

const mapStateToProps = (state) => ({ color: state.color, position: state.position })

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Index));