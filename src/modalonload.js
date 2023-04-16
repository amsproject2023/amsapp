import {Modal} from 'react-bootstrap';
import {usestate,useEffect, useState}from'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Modalwindow(){
    const[showModal,setshowModal]= useState(false);
     useEffect(()=>{
        setshowModal(true);},[]);
    return(
        <>
        <Modal show={showModal} onHide={()=>setshowModal(false)}>
            <Modal.Header closeButton>
                <h2>this is a body</h2>
            </Modal.Header>
                       </Modal>
        </>
    );
}
export default Modalwindow;