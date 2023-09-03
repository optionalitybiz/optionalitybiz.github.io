import classNames from 'classnames';
import styles from './our-work.module.scss';
import { WorkCard1 } from '../work-card-1/work-card-1';
import { WorkCardTwo } from '../work-card-two/work-card-two';
import { WorkCardThree } from '../work-card-three/work-card-three';
import { WorkCardFour } from '../work-card-four/work-card-four';
import { WorkCardFive } from '../work-card-five/work-card-five';
import Slide from 'react-reveal/Slide';

export interface OurWorkProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const OurWork = ({ className }: OurWorkProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            
            <div className={styles.mainDivOurWork}>
                <div className={styles.divOW}>
                <Slide bottom cascade>
                    <h1 className={styles.h1OurWork}>
                        Web Design / Social Media Marketing / Tech / Content Creation / Consulting
                    </h1>
                    </Slide>
                </div>
                <div>
                    <span className={styles.spanClassOurWork}>
                        <div className={styles.cardSpaceTwo}>
                            <WorkCardTwo />
                        </div>
                        <div>
                            <WorkCard1 />
                        </div>
                    </span>
                </div>
                <div className={styles.divThree}>
                    <WorkCardThree />
                </div>
                <div className={styles.divTwo}>
                    <span className={styles.spanClassOurWorkTwo}>
                        <div>
                            <WorkCardFour />
                        </div>
                        <div>
                            <WorkCardFive />
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
};
