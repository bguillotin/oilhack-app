import Link from 'next/link';
import Video from './Video';
import 'isomorphic-unfetch';
import injectSheet from 'react-jss';

const styles = {
    header: {
        backgroundColor: "#57EEF5",
    },
    nav: {
        position: "absolute",
        height: "auto",
        width: "100%",
        top: "50px",
        color: "white",
      },
      topMenu: {
        display: "flex",
        listStyle: "none",
        justifyContent: "flex-end",
        marginRight: "24px",
        "& li" : {
            marginRight: "12px",
            "& a": {
                textDecoration: "none",
            },
            "& a:visited": {
                color: "white",
            }
        },
      },
}

class Header extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Here is NextProps :: ', nextProps);
        console.log('Here is NextState :: ', nextState);

        return false;
    }

    toUpperCase = (string) => (<b>{string.toUpperCase()}</b>);

    render() {
        const {classes} = this.props;

        return (
            <header className={classes.header}>
                <Video src="http://wearecolorful.net/wp-content/uploads/2017/05/10.mp4" />
                <nav className={classes.nav}>
                    <ul className={classes.topMenu}>
                        <li><Link href='/video'><a>{this.toUpperCase('Videos')}</a></Link></li>
                        <li><Link href='/portfolio'><a>{this.toUpperCase('Portfolio')}</a></Link></li>
                        <li><Link href='/about'><a>{this.toUpperCase('About')}</a></Link></li>
                        <li><Link href='/contact'><a>{this.toUpperCase('Contact me')}</a></Link></li>
                    </ul>
                </nav>
            </header>
            
        )
    }
}

export default injectSheet(styles)(Header);