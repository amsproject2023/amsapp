import bannerimg from './images/ams-banner-group-of-studetns-with-animationated-icons.png';
function BannerSection() {
    return (
        <>
            <section className="ams-banner-section">
                <div className="container">
                    <div className='carousel ams-banner-carousel' data-bs-ride='carousel' id='banner-carousel-id'>
                        <div className='carousel-inner'>
                            <div className='carousel-item active'>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 ams-banner-content">
                                        <div className="ams-banner-title carousel-caption d-none d-md-block">
                                            <h1>The Ultimate<span className='d-block'> Destination Of Your </span>Software Career</h1>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 ams-banner-img">
                                        <img src={bannerimg} alt='banner-img' width='100%' />
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-item'>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 ams-banner-content">
                                        <div className="ams-banner-title carousel-caption d-none d-md-block">
                                            <h1>The Ultimate<span className='d-block'> Destination Of Your </span>Software Career</h1>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 ams-banner-img">
                                        <img src={bannerimg} alt='banner-img' width='100%'/>
                                    </div>
                                </div>
                            </div>
                            <button className='carousel-control-prev' data-bs-target='#banner-carousel-id' data-bs-slide='prev'>
                                <span className='carousel-control-prev-icon'></span>
                            </button>
                            <button className='carousel-control-next' data-bs-target='#banner-carousel-id' data-bs-slide='next'>
                                <span className='carousel-control-next-icon'></span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default BannerSection;