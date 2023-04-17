import testimonials from './images/ams-testimonials-quotes-frame.png'
import testi from './images/ams-testimonials-photo-nanditha-mohan.png'
import pin from './images/ams-testimonials-photo-holding-pin.png'
const Testimonials = () => {

    return (

        <section className=" container-fluid  ">
            <div className='container'>
                <h1 className="heading text-primary text-center">Testimonials</h1>
                <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div className='carousel-indicators '>
                            <button type="button" data-bs-target='#myCarousel' data-bs-slide-to='0' className='active abhi'></button>
                            <button type="button" data-bs-target='#myCarousel' data-bs-slide-to='1' className='abhi'></button>
                            <button type="button" data-bs-target='#myCarousel' data-bs-slide-to='2' className='abhi'></button>
                            <button type="button" data-bs-target='#myCarousel' data-bs-slide-to='3' className='abhi'></button>
                        </div>
                        <div className='text-center'>
                            <img src={testimonials} alt="ams-banner" />
                        </div>

                        <div class="carousel-item active">
                            <div className='row'>
                                <div className='abh col-md-7'>
                                    <p>Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor
                                        incidunt ut labore et dolore magna aliaqua. Quis ipsum Suspendise ultrices
                                        gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p></div>
                                <div className='abh col-md-5'>
                                    <img src={testi} alt="banerr" />
                                    <img src={pin} alt="banerr" />
                                </div>

                            </div>


                        </div>
                        <div class="carousel-item">

                            <div className='row'>
                                <div className='abh col-md-7'>
                                    <p>Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor
                                        incidunt ut labore et dolore magna aliaqua. Quis ipsum Suspendise ultrices
                                        gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p></div>
                                <div className='abh col-md-5'>
                                    <img src={testi} alt="banerr" />
                                    <img src={pin} alt="banerr" />
                                </div>
                            </div>


                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>

                        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Testimonials;
