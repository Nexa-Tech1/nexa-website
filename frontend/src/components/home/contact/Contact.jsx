import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import phoneImg from "../../../assets/phone.png";
import emailImg from "../../../assets/email.png";
import locationImg from "../../../assets/location.png";
import './Contact.css'

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()

    const serviceId = 'service_ko0p41a'
    const templateId = 'template_xp0geho'
    const publicKey = '5ZNpS4wiuNAY0BxvV'

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      to_name: 'Nexa Receiver',
      message: message,
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setShowSuccess(true);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  }

  return (
    <>
      {/* Success Modal */}
      {showSuccess && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalBox}>
            <div style={styles.checkmark}>✓</div>
            <h3 style={styles.successTitle}>Email Sent Successfully!</h3>
            <p style={styles.successMessage}>
              Thank you for contacting us. We'll get back to you soon.
            </p>
            <button 
              onClick={handleCloseSuccess}
              style={styles.okButton}
            >
              OK
            </button>
          </div>
        </div>
      )}

      <div className="contact" id="contact">
        <h2 className="title">CONTACT US</h2>
        <div className="contact-wrapper">
          <div className="contact-left">
            <h3>Contact Information</h3>

            <div className="contact-item">
              <img src={phoneImg} alt="phone" />
              <div>
                <p>+251-911-343-831</p>
                <p>+251-911-984-806</p>
                <p>+251-900-626-362</p>
                <p>+251-945-482-000</p>
              </div>
            </div>

            <div className="contact-item">
              <img src={emailImg} alt="email" />
              <div>
                <p>info@nexabusinessgroup.com</p>
                <p>Feven.Negussie@nexabusinessgroup.com</p>
                <p>Zekre.Henock@nexabusinessgroup.com</p>
                <p>www.nexabusinessgroup.com</p>
              </div>
            </div>

            <div className="contact-item">
              <img src={locationImg} alt="location" />
              <p>
                Eden Bldg, 4th floor, Office No. 01, Bole Rwanda St., Addis
                Ababa
              </p>
            </div>
          </div>

          <div className="contact-right">
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                value={name}
                placeholder="Full Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                value={phone}
                placeholder="Phone"
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <textarea
                value={message}
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalBox: {
    backgroundColor: 'white',
    padding: '40px 30px',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    maxWidth: '400px',
    width: '90%',
    animation: 'fadeIn 0.3s ease-out',
  },
  checkmark: {
    fontSize: '60px',
    color: '#4CAF50',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  successTitle: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '15px',
    fontWeight: '600',
  },
  successMessage: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '25px',
    lineHeight: '1.5',
  },
  okButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '12px 40px',
    fontSize: '16px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'background-color 0.3s',
  }
};

export default Contact;
