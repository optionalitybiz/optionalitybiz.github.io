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
    const words = [
        'We', 'believe', 'every', 'business', 'deserves', 'a', 'chance', 'no',
        'matter', 'how', 'small.', 'Founded', 'in', '2021', 'with', 'the',
        'mission', 'to', 'serve', 'others', 'in', 'our', 'local', 'community,',
        'Optionality', 'has', 'been', 'the', 'go-to', 'choice', 'for', 'many.',
        'We', 'strive', 'to', 'bring', 'the', 'best', 'possible', 'solution',
        'to', 'your', 'business.'
    ];

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divStatement}>
                {words.map((word, index) => (
                    <Fade
                        key={index}
                        bottom
                        delay={index * 50}
                        distance="20px"
                    >
                        <p className={styles.pStatement}>{word}</p>
                    </Fade>
                ))}
            </div>
        </div>
    );
};
