import styles from './ContactPage.module.scss';
import { Footer } from '../components/footer/footer';

function ContactPage() {

    https://docs.google.com/forms/d/e/1FAIpQLScRPaX064nbsnR6Y0eLEUn_LECmqtqqqmpyusgeuCiCFK69jQ/viewform

return (
    <div>
        <h1>Contact Us</h1>
        <h2>Email: contact@optionality.biz</h2>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScRPaX064nbsnR6Y0eLEUn_LECmqtqqqmpyusgeuCiCFK69jQ/viewform">
            <button>Inquire Here</button>
            </a>
            <div className={styles.Footer} >
                <Footer />
                </div>
        </div>
    );
}


export default ContactPage;