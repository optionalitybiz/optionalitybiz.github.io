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
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divOuterSpace}>
                <div className={styles.divIntro}>
                    <img src={pngTwo} alt="" className={styles.imgIntoClass} />
                    <h1 className={styles.h1MainIntroClass}>
                        Flexible Business Services &amp; Technology Solutions
                    </h1>
                    <h2 className={styles.h2SubtextInto}>
                        We are full-time college students supported by a network of experienced
                        freelance business professionals. Supporting the local business communities
                        of San Dimas, Glendora, La Verne and Covina.
                    </h2>
                    <button className={styles.buttonIntroClass}>Contact Us</button>
                </div>
            </div>
        </div>
    );
};
