import Link from 'next/link';
import MainLayout from '../js/components/MainLayout';

export default () => (<MainLayout><p>This is the about page</p><Link href='/'><a>Go home</a></Link></MainLayout>);