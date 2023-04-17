import amslogo from '../images/ams-logo.png';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./HomePage/Home";
import About from './AboutPage/About';

function Header() {
    const menu = ['Home', 'About Us', 'Courses', 'Services', 'Gallery', 'Contact Us'];
    const links = ['/', '/aboutUs', '/courses', '/services', '/gallery', '/contactUs'];
    const item = menu.map((list, index) => {
        return <li className='nav-item'><Link to={links[index]} className='nav-link'>{list}</Link></li>;
    })
    return (
        <>
            <BrowserRouter>
                <header className='container-fluid'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 ams-hd-navigation'>
                                <nav className='navbar navbar-expand-lg pt-3'>
                                    <div className='container'>
                                        <Link to='/' className='ams-hd-logo navbar-brand text-center'><img src={amslogo} alt='ams-logo' className='ams-hd-logoimg' width='230px' /></Link>
                                        <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#navbar'>
                                            <span className='navbar-toggler-icon'></span>
                                        </button>
                                        <div className='ams-hd-nav collapse navbar-collapse' id='navbar'>
                                            <ul className='ams-hd-menus navbar-nav'>
                                                {item}
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Header;
