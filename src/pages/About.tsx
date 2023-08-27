import styles from './About.module.scss';
import { AboutCards } from '../components/aboutCards/AboutCards';
import { Footer } from "../components/footer/footer";

import image1 from "../assets/Joshua.jpeg"
import image2 from "../assets/Gracelyn.jpeg"
import image3 from "../assets/Jacob.jpeg"

function About() {

    const founders = [
        {
            id: 1,
            name: "Joshua Goodman",
            desc: "Joshua leads technology endeavors for Optionality, developing websites, writing code and providing both software and hardware recommendations to our clients. He is currently a full-time student at Cal Poly Pomona pursuing a double major in Computer Science and Anthropology. ",
            image: image1,
            title: "Partner, Co-Founder"
        },
        {
            id: 2,
            name: "Gracelyn Goodman",
            desc: "Gracelyn oversees development of creative solutions, ecommerce and end-to-end marketing for Optionality's clients. Gracelyn earned the Presidents Award and graduated Summa cum laude from Cal Poly Pomona in 2021 with a degree in Anthropology. She previously served on the board of directors for the San Dimas Historical Society. ",
            image: image2,
            title: "Partner, Co-Founder"
        },
        {
            id: 3,
            name: "Jacob Goodman",
            desc: "Jacob manages data analytics for Optionality and its clients as well as back office functions for our business. He is currently a full-time student at Cal Poly Pomona pursuing a major in Applied Economics and a minor in Accounting. ",
            image: image3,
            title: "Partner, Co-Founder"
        },
    ];

return (
   
    <div className={styles.root}>
        <h1>Our Team</h1>
        <span className={styles.cards}>
        {founders.map((founder) => (
        <AboutCards 
            key={founder.id}
            id={founder.id}
            name={founder.name}
            desc={founder.desc}
            image={founder.image}
            title={founder.title}
             />
        ))}
        </span>
        <div className={styles.Footer} >
                <Footer />
                </div>
    </div>
 );
}


export default About;