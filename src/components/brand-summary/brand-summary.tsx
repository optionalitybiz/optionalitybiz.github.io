import classNames from 'classnames';
import styles from './brand-summary.module.scss';
import pngOne from '../../assets/CB.jpeg';
import pngTwo from '../../assets/SS.png';
import pngThree from '../../assets/mx.webp';
import pngFour from '../../assets/finned.png';
import pngFive from '../../assets/Screen Shot 2021-06-21 at 9_14_56 PM.webp';
import pngSix from '../../assets/TCS new logo.png';
import pngSeven from '../../assets/tw.png';
import pngEight from '../../assets/Logo_big_x50.png';

export interface BrandSummaryProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const BrandSummary = ({ className }: BrandSummaryProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divMain}>
                <span className={styles.spanBrand}>
                    <div className={styles.divBrand}>
                        <img
                            src={pngOne}
                            alt=""
                            className={styles.imgBrand}
                        />
                    </div>
                    <div className={styles.divBrand}>
                        <img
                            src={pngTwo}
                            alt=""
                            className={styles.imgBrand}
                        />
                    </div>
                    <div className={styles.divBrand}>
                        <img
                            src={pngThree}
                            alt=""
                            className={styles.imgBrand}
                        />
                    </div>
                    <div className={styles.divBrand}>
                        <img
                            src={pngFour}
                            alt=""
                            className={styles.imgBrand}
                        />
                    </div>
                </span>
                <span className={styles.spanBrand}>
                    <div className={styles.divBrand}>
                        <img
                            src={pngFive}
                            alt=""
                            className={styles.imgBrand}
                        />
                    </div>
                    <div className={styles.divBrand}>
                        <img
                            src={pngSix}
                            alt=""
                            className={styles.imgBrand}
                        />
                    </div>
                    <div className={styles.divBrand}>
                        <img
                            src={pngSeven}
                            alt=""
                            className={styles.imgBrand}
                        />
                    </div>
                    <div className={styles.divBrand}>
                        <img
                            src={pngEight}
                            alt=""
                            className={styles.imgBrand}
                        />
                    </div>
                </span>
            </div>
        </div>
    );
};
