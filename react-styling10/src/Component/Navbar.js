import './Navbar/navbar.css'

function Navbar() {
    return (
        <nav>
            <div>
                <div className='ContentBetweenContainer'>
                    <div className="nav-logo">
                        <logo className='logo'>Nest</logo>
                    </div>
                    <search className='search'>
                        <label>All Categories</label>
                        <input className='navinp' type="search" placeholder="Search" />
                    </search>
                    <div className="quickLinks">
                        <select className='location'>
                            <option>Your Location</option>
                            <option>Dwarka</option>
                            <option>Bhanvad</option>
                            <option>Rajkot</option>
                            <option>Baroda</option>
                        </select>
                        <button className='navbtn'>Compare</button>
                        <button className='navbtn'>Wishlist</button>
                        <button className='navbtn'>Cart</button>
                        <button className='navbtn'>Account</button>
                    </div>
                </div>
                <hr />
                <contain className='Contain'>
                    <select className='category'>
                        <option>Browse All Categories</option>
                        <option>Cake & Milk</option>
                        <option>Coffee & Tea</option>
                        <option>Pet Foods</option>
                        <option>Vegetabkes</option>
                    </select>
                    <ul>
                        <li><p>Hot Deals</p></li>
                        <li><p>Home</p></li>
                        <li><p>About</p></li>
                        <li><p>Shop</p></li>
                        <li><p>Vendors</p></li>
                        <li><p>Mega Menu</p></li>
                        <li><p>Blog</p></li>
                        <li><p>Pages</p></li>
                        <li><p>Contact</p></li>
                    </ul>
                </contain>
            </div>
            <hr />
        </nav>
    )
}

export default Navbar;