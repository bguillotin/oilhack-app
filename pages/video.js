import Link from 'next/link'
import Header from '../js/components/Header';
import Footer from '../js/components/Footer';
import 'isomorphic-unfetch';

export default () => (
  <div>
    <Header/>
    <p>This is the Videos page</p>
    <Link href='/'><a>Go home</a></Link>
    <Footer/>
  </div>
)