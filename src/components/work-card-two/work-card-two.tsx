import classNames from 'classnames';
import styles from './work-card-two.module.scss';
import png from '../../assets/ssCase.png';

export interface WorkCardTwoProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const WorkCardTwo = ({ className }: WorkCardTwoProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divCardTwo}>
                <img src={png} alt="" className={styles.imgCardTwo} />
                <h3 className={styles.h3CardTwo}>Consulting</h3>
                <p className={styles.parCardOne}>
                    Menu Creation with Online Ordering Services Management
                </p>
            </div>
        </div>
    );
};
