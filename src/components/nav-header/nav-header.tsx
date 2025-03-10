import classNames from 'classnames';
import styles from './nav-header.module.scss';
import png from '../../assets/logo.png';

export interface NavHeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const NavHeader = ({ className }: NavHeaderProps) => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 0; // Remove header offset since it's not fixed anymore
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
            <div className={styles.navDivMain}>
                <span className={styles.spanNavClass}>
                    <div className={styles.navSpanLogoDivClass}>
                        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                            <img src={png} alt="Optionality Business Solutions" className={styles.imgNavClass} />
                        </a>
                    </div>
                    <div className={styles.navSpanDivClass}>
                        <button onClick={() => scrollToSection('about')} className={styles.navLinkClass}>
                            About
                        </button>
                        <button onClick={() => scrollToSection('our-work')} className={styles.navLinkClass}>
                            Our Work
                        </button>
                        <button onClick={() => scrollToSection('services')} className={styles.navLinkClass}>
                            Services
                        </button>
                        <button onClick={() => scrollToSection('contact')} className={styles.navButtonClass}>
                            Contact Us
                        </button>
                    </div>
                </span>
            </div>
        </div>
    );
};
