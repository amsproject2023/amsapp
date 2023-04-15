import fullstackimg from '../../images/ams-featured-courses-full-stack-card-photo.jpg';
import frontendimg from '../../images/ams-featured-courses-front-end-card-photo.jpg';
import backendimg from '../../images/ams-featured-courses-back-end-card-photo.jpg';
import FeatureProps from './FeatureProps';
import FeatureListProps from './FeatureListProps';
const FeatureCourses = () => {
    let featurePara = 'Lorem ipsum dolor sit amet,consecteter adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas.';
    return (
        <>
            <section className="container ams-feature-section">
                <div className="row">
                    <div className="col-12 text-center ams-fc-heading">
                        <h1>Featured courses</h1>
                    </div>
                </div>
                <div className='carousel' id='ams-fc-carousel' data-bs-ride='carousel'>
                    <div className='carousel-inner'>
                        <div className='carousel-item active'>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12 p-0 ams-fc-fullstack card">
                                    <div className='fullstack-img'>
                                        <img src={fullstackimg} alt="fullstack-img" width='100%' />
                                    </div>
                                    <div className='card-body ams-fc-fullstack-content'>
                                        <h6>Full stack</h6>
                                        <FeatureProps featurecoursepara={featurePara} />
                                        <div className='ams-fc-courses-lists'>
                                            <FeatureListProps details='Courses Details' internship='Internship' career='Career Opportunities' />
                                        </div>
                                        <button className='btn btn-primary'>Read More</button>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 ams-fc-frontend p-0  card">
                                    <div className='frontend-img'>
                                        <img src={frontendimg} alt="frontend-img" width='100%' />
                                    </div>
                                    <div className='card-body ams-fc-frontend-content'>
                                        <h6>Front End</h6>
                                        <FeatureProps featurecoursepara={featurePara} />
                                        <div className='ams-fc-courses-lists'>
                                            <FeatureListProps details='Courses Details' internship='Internship' career='Career Opportunities' />
                                        </div>
                                        <button className='btn btn-primary'>Read More</button>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 p-0 ams-fc-backend card">
                                    <div className='backend-img'>
                                        <img src={backendimg} alt="backend-img" width='100%' />
                                    </div>
                                    <div className='card-body ams-fc-backend-content'>
                                        <h6>Back End</h6>
                                        <FeatureProps featurecoursepara={featurePara} />
                                        <div className='ams-fc-courses-lists'>
                                            <FeatureListProps details='Courses Details' internship='Internship' career='Career Opportunities' />
                                        </div>
                                        <button className='btn btn-primary'>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='carousel-item'>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12 p-0 ams-fc-fullstack card">
                                    <div className='fullstack-img'>
                                        <img src={fullstackimg} alt="fullstack-img" width='100%' />
                                    </div>
                                    <div className='card-body ams-fc-fullstack-content'>
                                        <h6>Full stack</h6>
                                        <FeatureProps featurecoursepara={featurePara} />
                                        <div className='ams-fc-courses-lists'>
                                            <FeatureListProps details='Courses Details' internship='Internship' career='Career Opportunities' />
                                        </div>
                                        <button className='btn btn-primary'>Read More</button>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 ams-fc-frontend p-0  card">
                                    <div className='frontend-img'>
                                        <img src={frontendimg} alt="frontend-img" width='100%' />
                                    </div>
                                    <div className='card-body ams-fc-frontend-content'>
                                        <h6>Front End</h6>
                                        <FeatureProps featurecoursepara={featurePara} />
                                        <div className='ams-fc-courses-lists'>
                                            <FeatureListProps details='Courses Details' internship='Internship' career='Career Opportunities' />
                                        </div>
                                        <button className='btn btn-primary'>Read More</button>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 p-0 ams-fc-backend card">
                                    <div className='backend-img'>
                                        <img src={backendimg} alt="backend-img" width='100%' />
                                    </div>
                                    <div className='card-body ams-fc-backend-content'>
                                        <h6>Back End</h6>
                                        <FeatureProps featurecoursepara={featurePara} />
                                        <div className='ams-fc-courses-lists'>
                                            <FeatureListProps details='Courses Details' internship='Internship' career='Career Opportunities' />
                                        </div>
                                        <button className='btn btn-primary'>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className='carousel-control-prev' data-bs-target='#ams-fc-carousel' data-bs-slide='prev'><span className='carousel-control-prev-icon'></span></button>
                        <button className='carousel-control-next' data-bs-target='#ams-fc-carousel' data-bs-slide='next'><span className='carousel-control-next-icon'></span></button>
                    </div>
                </div>





            </section>
        </>
    );
}
export default FeatureCourses;