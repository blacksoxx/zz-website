import React, { useEffect, useRef } from "react";
import "./Contact.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";
import "@fortawesome/fontawesome-free/css/all.css";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  useEffect(() => {
    const header = document.querySelector(".header-container") as HTMLElement;
    if (header) {
      header.style.backdropFilter = `blur(20px)`;
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    // Send email using EmailJS
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        formRef.current,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Your message has been sent!");
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Failed to send your message. Please try again.");
        }
      );
  };

  return (
    <>
      <div
        className="contact-container"
        style={{
          backgroundImage: "url('/violin.jpg')", // Path relative to the public folder
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Helmet>
          <title>Contact | Zied Zouari</title>
        </Helmet>
        <Header />
        <main className="contact-content">
          <div className="contact-form-section">
            <h1>CONTACT</h1>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <input type="text" name="user_name" placeholder="Name" required />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
              />
              <input
                type="text"
                name="user_subject"
                placeholder="Subject"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
