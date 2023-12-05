import classNames from 'classnames';
import styles from './footer.module.scss';
import png from '../../assets/color logo transparent.png';
import insta from '../../assets/icons8-instagram-48.png';
import facebook from '../../assets/icons8-facebook-48.png';
import linkedIn from '../../assets/icons8-linkedin-48.png';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {

    (function(d){
        var s = d.createElement("script");
         s.setAttribute("data-position", "3");
         s.setAttribute("data-color", "#242424");
        s.setAttribute("data-account", "eRSoiwiIbG");
        s.setAttribute("src", "https://cdn.userway.org/widget.js");
        (d.body || d.head).appendChild(s);})(document)


    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <span className={styles.spanFooter}>
                    <img src={png} alt="" className={styles.imgStyle} />
                    <div></div>
                    <div>
                        <span>
                            <img src={facebook} className={styles.icon}></img>
                            <img src={insta} className={styles.icon}></img>
                            <img src={linkedIn} className={styles.icon}></img>
                        </span>
                    </div>
                </span>
            </div>
        </div>
    );
};
