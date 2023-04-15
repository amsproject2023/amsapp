import contactBg from "./images/ams-contact-us-background.jpg";
import { useState } from "react";
import "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({ name: '', email: "", phone: "" });
    const validateHomeForm = (eve) => {
        eve.preventDefault();
        const fErrors = { name: "", email: "", phone: "" };


        if (name == "") {
            // alert("Name");
            fErrors.name = "Please enter your Name";
        }
        if (email == "") {
            // alert("e-mail");
            fErrors.email = "Please enter your e-mail";

        }
        if (phone == "") {
            // alert("Phone Number");
            fErrors.phone = "Please enter your Phone number";
        }
    
      
        setErrors(fErrors);
        if (!fErrors.name && !fErrors.email && !fErrors.phone) {
            setName("");
            setEmail("");
            setPhone("");
        }
    }
    return (
        <section className="ams-home-contact-section">
            <h1 className="ams-homeContact-heading">Contact Us</h1>
            <form onSubmit={validateHomeForm} className="ams-home-form">
                <input type="text" value={name} placeholder="Your name" onChange={(eve) => setName(eve.target.value)} className="d-block ams-home-name-input"/>
                {errors.name && <span className="ams-home-errors"> {errors.name}<div></div></span>
                
                }

                <input type="email" value={email} placeholder="Email" onChange={(eve) => setEmail(eve.target.value)} className="d-block ams-home-email-input" />
                {errors.email && <span className="ams-home-errors">{errors.email}</span>}

                <input type="tel" value={phone} id="mobile_number" placeholder="Phone number" onChange={(eve) => { setPhone(eve.target.value) }} className="d-block ams-home-phone-input" />
                {errors.phone && <span className="ams-home-errors">{errors.phone}</span>}

                <input type="submit" />
            </form>
            <img src={contactBg} alt="Contact Us" title="Contact Us" width="100%" className="ams-contact-bg" />
        </section >
    );
}
export default Contact;