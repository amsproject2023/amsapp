import footerlogo from '../../images/ams-logo.png'
import Footermap1 from './Footermap1';
import Footermap2 from './Footermap2';

const Footer = () => {
    return (
        <footer className="container-fluid ams-footerbg">
            <div className="container">
                <div className="row ams-footerrow1">
                    <div className="col-lg-12 col-sm-12 col-md-12 text-center py-5">
                        <h1>useful information</h1>
                    </div>
                </div>
                <div className="row ams-footerrow2 pb-5 mb-5">
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <img src={footerlogo} alt='footer logo image' width='200px' />
                        <p className='pt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eisumod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenascilisis.</p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12 pt-5">
                        <h3 className='pb-4'>navigation site</h3>
                        <Footermap1/>  
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12 pt-5">
                        <h3 className='pb-4'>policies</h3>
                        <Footermap2/>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12 pt-5">
                        <h3 className='pb-4'>social media</h3>
                        <li><span className='bi-meta'></span><a href='#'>meta</a></li>
                        <li><span className='bi-twitter'></span><a href='#'>twitter</a></li>
                        <li><span className='bi-instagram'></span><a href='#'>instagram</a></li>
                        <li><span className='bi-youtube'></span><a href='#'>youtube</a></li>
                    </div>
                </div>
                <div className='copy-rights text-center pt-5'>
                    <span><i className='bi-c-circle pe-2'></i>all copy rights reserved - 2023</span>
                </div>
            </div>
        </footer>
    )
}
export default Footer;