import classNames from 'classnames';
import styles from './services.module.scss';
import { Service, service } from '../service/service';

import Fade from 'react-reveal/Fade';

export interface ServicesProps {
    className?: string;
    services: service[];
}


export const Services = ({ className, services }: ServicesProps) => {
    return (
        <div className={classNames(styles.root, className)}>
           
            <div className={styles.divMain}>
            <Fade left>
                <h3 className={styles.h3Services}>Products And Services</h3>
                <p className={styles.h2Services}>
                    Our clients include, local restaurants, online retailers, fitness brands and
                    many more.
                </p>
                </Fade>
            </div>
            {services.map((service) => (
                <div>
                    <Fade left>
                    <Service 
                        key={service.id}
                        id={service.id}
                        title={service.title} 
                        description={service.description}
                        bulletOne={service.bulletOne}
                        bulletTwo={service.bulletTwo}
                        bulletThree={service.bulletThree}
                        />
                    </Fade> 
                </div>
            ))}
        </div>
    );
};
