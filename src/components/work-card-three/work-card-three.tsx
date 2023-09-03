import classNames from 'classnames';
import styles from './work-card-three.module.scss';
import png from '../../assets/cardThree.png';
import Fade from 'react-reveal/Fade';

export interface WorkCardThreeProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const WorkCardThree = ({ className }: WorkCardThreeProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Fade bottom>
            <div className={styles.divCardThree}>
                <img src={png} alt="" className={styles.imgCardThree} />
                <h2 className={styles.h2CardThree}>Design</h2>
                <p className={styles.parCardThree}>Product Creation and Brand Developement</p>
            </div>
            </Fade>
        </div>
    );
};
