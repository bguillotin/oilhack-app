import Link from 'next/link';
import Header from '../js/components/Header';
import Footer from '../js/components/Footer';

export default () => (
  <div>
    <Header/>
    <p>This is the about page</p>
    <Link href='/'><a>Go home</a></Link>
    <Footer/>
  </div>
)