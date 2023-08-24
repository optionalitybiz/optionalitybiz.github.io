import classNames from 'classnames';
import styles from './contact.module.scss';

export interface ContactProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Contact = ({ className }: ContactProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divContact}>
                <h3 className={styles.h3Contact}>Partner With Us!</h3>
                <h1 className={styles.h1Contact}>Let us suit your Businesses needs.</h1>
                <button className={styles.divButton}>Contact Us</button>
            </div>
        </div>
    );
};
