import "./contact.css";
import Phone from "../../img/mobile.png";
import Email from "../../img/email.png";
import Address from "../../img/award.jpg";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";


const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vv9qh57",
        "template_wthkzqi",
        formRef.current,
        "bWX9CjBwZk8lA5eHE"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +92 323 6824 737
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              muhammadtalhakhan326@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Lahore, Pakistan
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor:  "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor:  "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor:"#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;