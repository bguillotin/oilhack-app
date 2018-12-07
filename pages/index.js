import Vimeo from '@u-wave/react-vimeo';
import Head from 'next/head';
import MainLayout from '../js/components/MainLayout';
import { connect } from 'react-redux';
// import { setColor, setPosition } from '../js/action'
import injectSheet from 'react-jss';
import styles from './jss/home-style'
import RandomImage from '../js/components/RandomImage';

// export default Index;
class Index extends React.PureComponent {
    constructor(props) {
        super(props);
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
                    <RandomImage />
                    <p>Welcome to Oilhack Website ! Running now on node Server with the lastest videos !!</p>
                    <Vimeo video="302238593" autoplay muted={true} loop={true}/>
                </MainLayout>
            </React.Fragment>
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
export default injectSheet(styles)(Index);
