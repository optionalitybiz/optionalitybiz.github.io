import classNames from 'classnames';
import styles from './main-statement.module.scss';
import Fade from 'react-reveal/Fade';

export interface MainStatementProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const MainStatement = ({ className }: MainStatementProps) => {
    return (
        <div className={classNames(styles.root, className)}>
             <Fade bottom cascade>
            <div className={styles.divStatement}>
                <p className={styles.pStatement}>We </p>  
                <p className={styles.pStatement}>believe </p>
                <p className={styles.pStatement}>every </p>
                <p className={styles.pStatement}>business </p>
                <p className={styles.pStatement}>deserves </p>
                <p className={styles.pStatement}>a </p>
                <p className={styles.pStatement}>chance </p>
                <p className={styles.pStatement}>no </p>
                <p className={styles.pStatement}>matter </p>
                <p className={styles.pStatement}>how </p>
                <p className={styles.pStatement}>small. </p>
                <p className={styles.pStatement}>Founded </p>
                <p className={styles.pStatement}>in </p>
                <p className={styles.pStatement}>2021 </p>
                <p className={styles.pStatement}>with </p>
                <p className={styles.pStatement}>the </p>
                <p className={styles.pStatement}>mission </p>
                <p className={styles.pStatement}>to </p>
                <p className={styles.pStatement}>serve </p>
                <p className={styles.pStatement}>others </p>
                <p className={styles.pStatement}>in </p>
                <p className={styles.pStatement}>our </p>
                <p className={styles.pStatement}>local </p>
                <p className={styles.pStatement}>community, </p>
                <p className={styles.pStatement}>Optionality </p>
                <p className={styles.pStatement}>has </p>
                <p className={styles.pStatement}>been </p>
                <p className={styles.pStatement}>the </p>
                <p className={styles.pStatement}>go-to </p>
                <p className={styles.pStatement}>choice </p>
                <p className={styles.pStatement}>for </p>
                <p className={styles.pStatement}>many. </p>
                <p className={styles.pStatement}>We </p>
                <p className={styles.pStatement}>strive </p>
                <p className={styles.pStatement}>to </p>
                <p className={styles.pStatement}>bring </p>
                <p className={styles.pStatement}>the </p>
                <p className={styles.pStatement}>best </p>
                <p className={styles.pStatement}>possible </p>
                <p className={styles.pStatement}>solution </p>
                <p className={styles.pStatement}>to </p>
                <p className={styles.pStatement}>your </p>
                <p className={styles.pStatement}>business. </p>
            </div>
            </Fade>
        </div>
    );
};
