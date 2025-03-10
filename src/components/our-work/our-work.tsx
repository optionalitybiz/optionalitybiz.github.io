import { useEffect, useRef } from 'react';
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
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '50px',
            }
        );

        const elements = sectionRef.current?.querySelectorAll('[data-parallax]');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const services = [
        'Web Design',
        'Social Media Marketing',
        'Tech',
        'Content Creation',
        'Consulting'
    ];

    return (
        <div className={classNames(styles.root, className)} ref={sectionRef}>
            <div className={styles.mainDivOurWork}>
                <div className={styles.divOW} data-parallax>
                    <h1 className={styles.h1OurWork}>
                        {services.map((service, index) => (
                            <>
                                <span key={service}>{service}</span>
                                {index < services.length - 1 ? ' / ' : ''}
                            </>
                        ))}
                    </h1>
                </div>
                
                <div>
                    <span className={styles.spanClassOurWork}>
                        <div data-parallax>
                            <WorkCardTwo />
                        </div>
                        <div data-parallax>
                            <WorkCard1 />
                        </div>
                    </span>
                </div>

                <div className={styles.divThree} data-parallax>
                    <WorkCardThree />
                </div>

                <div className={styles.divTwo}>
                    <span className={styles.spanClassOurWorkTwo}>
                        <div data-parallax>
                            <WorkCardFour />
                        </div>
                        <div data-parallax>
                            <WorkCardFive />
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
};
