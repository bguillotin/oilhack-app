import Link from 'next/link';

const home = () => {
    return (    
        <div>
            <p>Welcome to Oilhack Website ! Running on node Server !!</p>
            <p><img src="/static/images/screenshot.png"></img></p>
            <ul>
                <li><Link href='/video'><a>Videos</a></Link></li>
                <li><Link href='/portfolio'><a>Portfolio</a></Link></li>
                <li><Link href='/about'><a>About</a></Link></li>
                <li><Link href='/contact'><a>Contact me</a></Link></li>
            </ul> 
        </div>
    )
}

export default home;