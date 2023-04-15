const ServicesComponents = (props) => {
    return (
        <>
            <div className="col-md-4 col-sm-12 p-0">
                <div className="card">
                    <img src={props.ServicesComponents_img} alt={props.ServicesComponents_img_alt} title={props.ServicesComponents__img_title} width='100%' />
                    <div className="card-body">
                        <h4 className="card-title">{props.ServicesComponents_title}</h4>
                        <p className="card-text">{props.ServicesComponents_description}</p>
                        <button className='btn btn-primary'>{props.ServicesComponents_button}</button>
                    </div>

                </div>
            </div>

        </>
    )
}
export default ServicesComponents;