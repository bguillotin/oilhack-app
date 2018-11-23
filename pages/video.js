import Link from 'next/link'
import Header from '../js/Header';
import Footer from '../js/Footer';

export default () => (
  <div>
    <Header/>
    <p>This is the Videos page</p>
    <Link href='/'><a>Go home</a></Link>
    <Footer/>
  </div>
)