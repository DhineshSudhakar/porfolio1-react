import React, { useState } from 'react'
import './Contact.css'
import emailjs from "emailjs-com"

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_49rcvw3', 'template_5b98i7o', event.target, 'user_1DVSsyiJDz0XCRVJ1E6HB')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        event.target.reset();
    }

    return (
        <div className="contact" id="contact">
            <h1>Contact Me</h1>
            <form onSubmit={sendEmail}>
                <input type="text" value={name} onChange={e => setName(e.target.value)}
                    placeholder="Name" name="name" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="Email" name="email" />
                <input type="text" value={subject} onChange={e => setSubject(e.target.value)}
                    placeholder="Subject" name="subject" />
                <textarea type="text" value={message} onChange={e => setMessage(e.target.value)}
                    placeholder="Your message" name="message" />
                <button className="contact__button" type="submit">Submit</button>
            </form>
            <h5>Email : dhinesh.sudhakar93@gmail.com</h5>
        </div>
    )
}

export default Contact
