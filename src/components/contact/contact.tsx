import classNames from 'classnames';
import styles from './contact.module.scss';
import React, {useState }from 'react';
import Reveal from 'react-reveal/Reveal';


import { Link } from "react-router-dom";


export interface ContactProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Contact = ({ className }: ContactProps) => {

    const [showEmail, setShowEmail] = useState(false);

    const toggleEmail = () => {
        setShowEmail(!showEmail);
      };

    return (
        <div className={classNames(styles.root, className)}>
                   <Reveal effect="fadeInUp">
            <div className={styles.divContact}>
           
                <h3 className={styles.h3Contact}>Partner With Us!</h3>
                <h1 className={styles.h1Contact}>We would love to see your business succeed. Let us suit your Businesses needs.</h1>
                <Link to="/contact">    
                <button className={styles.divButton} onClick={toggleEmail}>Contact Us</button>
                </Link>
                {showEmail && <p className={styles.email}>Email: contact@optionality.biz </p>}
               
            </div>
            </Reveal>
        </div>
    );
};
