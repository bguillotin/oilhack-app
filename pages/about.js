import Link from 'next/link';
import MainLayout from '../js/components/MainLayout';
import injectSheet from 'react-jss';
import styles from './jss/about-style.js';

class About extends React.PureComponent {
    render() {
        return (
            <MainLayout {...this.props}><p>This is the about page</p><Link href='/'><a>Go home</a></Link></MainLayout>
        );
    }
}

export default injectSheet(styles)(About);