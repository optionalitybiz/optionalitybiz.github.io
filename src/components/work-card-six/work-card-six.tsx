import classNames from 'classnames';
import styles from './work-card-six.module.scss';

export interface WorkCardSixProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const WorkCardSix = ({ className }: WorkCardSixProps) => {
    return <div className={classNames(styles.root, className)}>
        <div />
    </div>;
};
