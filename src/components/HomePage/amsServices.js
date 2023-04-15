import ServicesComponents from "./servicesComponents";
import sd from '../../../images/ams-services-software-development-card-photo.jpg';
import st from '../../../images/ams-services-software-training-card-photo.jpg';
import ps from '../../../images/ams-services-printing-service-card-photo.jpg';
const Services = () => {
    return (
        <>
            <div className="container-fluid  p-0">
                <div className="container">
                    <div className="row">
                        <ServicesComponents ServicesComponents_img={sd} ServicesComponents_img_alt='ams-services-software-development' ServicesComponents_img_title='ams-services-software-development' ServicesComponents_title='Software Development' ServicesComponents_description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida' ServicesComponents_button='Read More' />
                        <ServicesComponents ServicesComponents_img={st} ServicesComponents_img_alt='ams-services-software-training' ServicesComponents_img_title='ams-services-software-training' ServicesComponents_title='Software Training' ServicesComponents_description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida' ServicesComponents_button='Read More' />
                        <ServicesComponents ServicesComponents_img={ps} ServicesComponents_img_alt='ams-services-printing-service' ServicesComponents_img_title='ams-services-printing-service' ServicesComponents_title='Printing Services' ServicesComponents_description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida' ServicesComponents_button='Read More' />
                    </div>

                    
                </div>
            </div>
        </>
    )
}
export default Services;