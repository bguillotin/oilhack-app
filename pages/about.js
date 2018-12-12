import Link from 'next/link';
import MainLayout from '../js/components/MainLayout';

class About extends React.PureComponent {
    render() {
        return (
            <MainLayout><p>This is the about page</p><Link href='/'><a>Go home</a></Link></MainLayout>
        );
    }
}

export default About;