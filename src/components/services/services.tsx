import classNames from 'classnames';
import styles from './services.module.scss';
import { Service } from '../service/service';

export interface ServicesProps {
    className?: string;
    services?: string[];
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Services = ({ className, services }: ServicesProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divMain}>
                <h3 className={styles.h3Services}>Products And Services</h3>
                <p className={styles.h2Services}>
                    Our clients include, local restaurants, online retailers, fitness brands and
                    many more.
                </p>
            </div>
            {services.map((service) => (
                <div>
                    <Service key={service.id} service={service} />
                </div>
            ))}
        </div>
    );
};
