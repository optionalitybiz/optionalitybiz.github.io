import { OurWork } from "../components/our-work/our-work"
import styles from "./ProjectPage.module.scss";
import { Footer } from "../components/footer/footer";

function ProjectsPage () {
    return (
        <div className={styles.main}>
            <h1>Our Work</h1>
            <div className={styles.ourwork}>

        <OurWork />
        </div>
        <div className={styles.Footer} >
                <Footer />
                </div>
        </div>
    )
}

export default ProjectsPage;