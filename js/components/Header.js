import Link from 'next/link';
import 'isomorphic-unfetch';

class Header extends React.Component {
    static async getInitialProps () {
        // eslint-disable-next-line no-undef
        const res = await fetch('https://api.github.com/repos/developit/preact')
        const json = await res.json()
        return { stars: json.stargazers_count }
    }

    render() {
        return (
            <ul>
                <li><Link href='/video'><a>Videos {this.props.stars}</a></Link></li>
                <li><Link href='/portfolio'><a>Portfolio</a></Link></li>
                <li><Link href='/about'><a>About</a></Link></li>
                <li><Link href='/contact'><a>Contact me</a></Link></li>
            </ul>
        )
    }
}

export default Header;