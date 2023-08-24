import classNames from 'classnames';
import styles from './work-card-1.module.scss';
import png from '../../assets/mostxcellentjuic.png';

export interface WorkCard1Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const WorkCard1 = ({ className }: WorkCard1Props) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.cardOneDiv}>
                <img src={png} alt="" className={styles.imgCardOne} />
                <h3 className={styles.h3CardOne}>Web Design</h3>
                <p className={styles.parCardTwo}>
                    Website with Content Creation featuring moving animations upon page load{' '}
                </p>
            </div>
        </div>
    );
};
