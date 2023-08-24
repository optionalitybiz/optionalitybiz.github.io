import classNames from 'classnames';
import styles from './spacer-black.module.scss';

export interface SpacerBlackProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SpacerBlack = ({ className }: SpacerBlackProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divSpacerBlack} />
        </div>
    );
};
