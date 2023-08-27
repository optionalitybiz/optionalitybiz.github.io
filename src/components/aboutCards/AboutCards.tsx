import classNames from 'classnames';
import styles from './AboutCards.module.scss';


export interface AboutProps {
    className?: string;
    name: string;
    desc: string;
    id: number;
    image: string;
    title: string;
}


export const AboutCards = ({ className, name, desc, image, title }: AboutProps) => {


    return (
        <div className={classNames(styles.root, className)}>

            <img src={image} className={styles.image}></img>
           <h1 className={styles.h1}>{name}</h1>
           <h2 className={styles.h2}>{title}</h2>
           <p className={styles.par}>{desc}</p>
           
        </div>
    );
};
