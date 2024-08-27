import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cfe52436-11af-4f21-88f5-b691cf32dd55");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Contact Us <img src={msg_icon} alt="" /> </h3>
            <p>To get a quote or general inquires, please fill out our contact form. We’ll be in touch shortly with the right Nutrivolent expert to help you find the right solutions for your operation.</p>
        <ul>
            <li><img src={mail_icon} alt="" />contactnutritionnest.com</li>
            <li><img src={phone_icon} alt="" />+91 8886163899</li>
            <li><img src={location_icon} alt="" />Hyderabad, Telangana, India
</li>

        </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>First Name</label>
                <input type="text" name='firstName' placeholder='Enter Your FirstName' required/>
           
                <label>Last Name</label>
                <input type="text" name='lastName' placeholder='Enter Your LastName' required/>
           
                <label>Country</label>
                <input type="text" name='country' placeholder='Enter Your Country' required/>
           
                <label>State/Province</label>
                <input type="text" name='state' placeholder='Enter Your State/Province' required/>
           
                <label>City</label>
                <input type="text" name='city' placeholder='Enter Your City' required/>
           
                <label>Postal Code</label>
                <input type="text" name='postalCode' placeholder='Enter Your Postal Code' required/> 
           
                 <label>Email</label>
                <input type="text" name='email' placeholder='Enter Your Email' required/>
           
               
           
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your Mobile Number' required/>
           

                <label>Comments</label>
                <textarea name="message"  rows="6" placeholder='Enter your comments' required></textarea>

                <button type='submit' className='btn dark-btn'>Submit <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact