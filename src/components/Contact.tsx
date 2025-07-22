import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import "./css/contact.css"

const Contact = () => {
    return (
        <section className="contact-container">
            <h1>Contact Me</h1>
            <div className="contact-icons">
                <a href="https://www.youtube.com/" target="_blank"><FaTwitter className="FaTwitter"/> <span>Twitter</span></a>
                <a href="https://www.youtube.com/" target="_blank"><FaYoutube className="FaYoutube"/> <span>Youtube</span></a>
                <a href="https://www.youtube.com/" target="_blank"><FaGithub className="FaGithub"/> <span>Github</span></a>
                <a href="https://www.youtube.com/" target="_blank"><FaInstagram className="FaInstagram"/> <span>Instagram</span></a>
            </div>
        </section>
    )
}

export default Contact