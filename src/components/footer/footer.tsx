import classNames from 'classnames';
import styles from './footer.module.scss';
import png from '../../assets/color logo transparent.png';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
    const [showModal, setShowModal] = useState(false);

    // UserWay Accessibility Widget
    (function(d){
        var s = d.createElement("script");
        s.setAttribute("data-position", "3");
        s.setAttribute("data-color", "#242424");
        s.setAttribute("data-account", "eRSoiwiIbG");
        s.setAttribute("src", "https://cdn.userway.org/widget.js");
        (d.body || d.head).appendChild(s);
    })(document);

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.spanFooter}>
                <img src={png} alt="Optionality Business Solutions" className={styles.imgStyle} />
                
                <div className={styles.footerMiddle}>
                    <button onClick={() => setShowModal(true)} className={styles.accessibilityBtn}>
                        Accessibility Statement
                    </button>
                    <p className={styles.copyright}>© 2024 Optionality Business Solutions. All rights reserved.</p>
                </div>

                <div className={styles.socialIcons}>
                    <a href="https://www.instagram.com/optionalitybiz/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                        <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                    </a>
                    <a href="https://www.linkedin.com/company/74933403/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                        <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
                    </a>
                </div>
            </div>

            {showModal && (
                <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
                    <div className={styles.modal} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setShowModal(false)}>×</button>
                        <h2>Accessibility Statement</h2>
                        <div className={styles.modalContent}>
                            <h3>An Open Commitment</h3>
                            <p>optionality.biz is committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability. We are actively working to increase the accessibility and usability of our website and in doing so adhere to many of the available standards and guidelines.</p>
                            
                            <h3>Our Accessibility Solution</h3>
                            <p>Accessibility on optionality.biz makes available the UserWay Website Accessibility Widget that is powered by a dedicated accessibility server. The software allows optionality.biz to improve its compliance with the Web Content Accessibility Guidelines (WCAG 2.1).</p>
                            
                            <h3>Enabling the Accessibility Menu</h3>
                            <p>The optionality.biz accessibility menu can be enabled by clicking the accessibility menu icon that appears on the bottom right-hand corner of the page. After triggering the accessibility menu, please wait a moment for the accessibility menu to load in its entirety.</p>
                            
                            <h3>Disclaimer</h3>
                            <p>optionality.biz continues its efforts to constantly improve the accessibility of its site and services in the belief that it is our collective moral obligation to allow seamless, accessible, and unhindered use for those of us with disabilities. Despite our efforts to make all pages and content on optionality.biz fully accessible, some content may not have yet been fully adapted to the strictest accessibility standards. This may be a result of not having found or identified the most appropriate technological solution.</p>
                            
                            <h3>Contact Us</h3>
                            <p>We are continually seeking out solutions that will bring all areas of the site up to the same level of overall web accessibility. In the meantime should you experience any difficulty in accessing optionality.biz, please don't hesitate to contact us.</p>
                            
                            <p>Email: <a href="mailto:contact@optionality.biz">contact@optionality.biz</a></p>
                            <p>Address: San Dimas, CA 91773</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
