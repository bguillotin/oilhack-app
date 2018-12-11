import Link from 'next/link'
import MainLayout from '../js/components/MainLayout';
import injectSheet from "react-jss";

const styles = { 
    p: {
        color: "yellow"
    }
}

class Portfolio extends React.PureComponent {
    render() {
        const {classes} = this.props;

        return (
            <MainLayout>
                <p className={classes.p}>This is the Portfolio page</p>
                <Link href='/'><a>Go home</a></Link>
            </MainLayout>
        )
    }
}

export default injectSheet(styles)(Portfolio);