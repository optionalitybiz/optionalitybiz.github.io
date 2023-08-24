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
    return (
        <div className={styles.root}>
            <div className={styles.navDivMain}>
                <span className={styles.spanNavClass}>
                    <div className={styles.navSpanLogoDivClass}>
                        <img src={png} alt="" className={styles.imgNavClass} />
                    </div>
                    <div className={styles.navSpanDivClass}>
                        <a href="/" className={styles.navLinkClass}>
                            Services
                        </a>
                        <a href="/" className={styles.navLinkClass}>
                            Projects
                        </a>
                        <a href="/" className={styles.navLinkClass}>
                            About
                        </a>
                        <button className={styles.navButtonClass}>Contact Us</button>
                    </div>
                </span>
            </div>
        </div>
    );
};
