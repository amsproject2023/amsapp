import BannerImage from './images/ams-banner-group-of-studetns-with-animationated-icons.png';
const Banner = () => {
    return (
        <section className="container-fluid ams-banner">
            <div className="container">
                <div className='slideshow'>
                    <div className='carousel slides' data-bs-ride='carousel' id='ams-slide'>
                        <div className='carousel-inner'>
                            <div className='carousel-indicators'>
                                <button type='button' data-bs-target='#ams-slide' data-bs-slide-to='0' className='active'></button>
                                <button type='button' data-bs-target='#ams-slide' data-bs-slide-to='1'></button>
                                <button type='button' data-bs-target='#ams-slide' data-bs-slide-to='2'></button>
                            </div>
                            <div className='carousel-item active'>
                                <div className="row ams-row-banner">
                                    <div className="col-lg-6 col-md-6 col-sm-12 ams-banner-text m-auto">
                                        <h1 className="ams-banner-hedding">the ultimate <span className="ams-destination">destination for your </span>software carrer</h1>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 ams-banner-image m-auto">
                                        <img src={BannerImage} width='100%' alt='student' />
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-item'>
                                <div className="row ams-row-banner">
                                    <div className="col-lg-6 col-md-6 col-sm-12 ams-banner-text m-auto">
                                        <h1 className="ams-banner-hedding">the ultimate <span className="ams-destination">destination for your </span>software carrer</h1>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 ams-banner-image m-auto">
                                        <img src={BannerImage} width='100%' alt='student' />
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-item'>
                                <div className="row ams-row-banner">
                                    <div className="col-lg-6 col-md-6 col-sm-12 ams-banner-text m-auto">
                                        <h1 className="ams-banner-hedding">the ultimate <span className="ams-destination">destination for your </span>software carrer</h1>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 ams-banner-image m-auto">
                                        <img src={BannerImage} width='100%' alt='student' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Banner;