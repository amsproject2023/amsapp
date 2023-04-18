const Footermap2 = () => {
    const Listitems = ['privacy policy', 'terms & conditions', 'return policy']
    const Items = Listitems.map((data) => {
        return (<li><a href='#'>{data}</a></li>)
    })
    return (
        <>
        {Items}
        </>
    )
}
export default Footermap2;