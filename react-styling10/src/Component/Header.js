import '../Component/Header/header.css';

function Header() {
    return (
        <contain className="contain">
            <header id="header" className="container">
                <main>
                    <h1>Don't miss amazing<br /> grocery deals</h1>
                    <h4>Sign up for the daily newsletter</h4>
                    <input className='inp' type="email" placeholder="Your email address" id="email" name="email" />
                    <button className='btn'>Subscribe</button>
                </main>
            </header>
        </contain>
    )
}

export default Header;