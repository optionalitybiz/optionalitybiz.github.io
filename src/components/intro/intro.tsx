import classNames from 'classnames';
import styles from './intro.module.scss';
import pngTwo from '../../assets/nameOnly.png';

export interface IntroProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Intro = ({ className }: IntroProps) => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divOuterSpace}>
                <div className={styles.divIntro}>
                    <img src={pngTwo} alt="Optionality Business Solutions" className={styles.imgIntoClass} />
                    <h1 className={styles.h1MainIntroClass}>
                        Innovative Business Solutions & Technology Services
                    </h1>
                    <h2 className={styles.h2SubtextInto}>
                        Empowering businesses with cutting-edge technology solutions and strategic consulting services. 
                        Serving the vibrant business communities of San Dimas, Glendora, La Verne, and Covina with 
                        expertise in web development, digital marketing, and business optimization.
                    </h2>
                    <div className={styles.ctaContainer}>
                        <button onClick={() => scrollToSection('contact')} className={styles.buttonIntroClass}>
                            Get Started
                        </button>
                        <button onClick={() => scrollToSection('services')} className={styles.buttonSecondary}>
                            Our Services
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
