const Footermap1 = () => {
    const Listitems = ['home', 'about us', 'courses', 'services', 'careers', 'contact us']
    const Items = Listitems.map((data) => {
        return (<li><a href='#'>{data}</a></li>)
    })
    return (
        <>
            {Items}
        </>
    )
}
export default Footermap1;