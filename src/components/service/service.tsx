import classNames from 'classnames';
import styles from './service.module.scss';
import React, { useState } from 'react';

export interface ServiceProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Service = ({ className, service }: ServiceProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const { id, title, description, bulletOne, bulletTwo, bulletThree } = service;

    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <span className={styles.spanService}>
                    <div className={styles.divText}>
                        <h2>0{id}</h2>
                        <h1>{title}</h1>
                    </div>
                    <div className={styles.divButton}>
                        <button className={styles.button} onClick={toggleDropdown}>
                            +
                        </button>
                    </div>
                </span>
                <div />
            </div>

            {isDropdownOpen && (
                <div className="dropdown-content">
                    {/* Dropdown content goes here */}
                    <span className={styles.dropdown}>
                        <div>
                        <ul className={styles.ul}>
                            <li className={styles.ul}>{bulletOne}</li>
                            <li  className={styles.ul}>{bulletTwo}</li>
                            <li  className={styles.ul}>{bulletThree}</li>
                        </ul>
                        </div>
                        <div className={styles.divDesc}>
                        <p className ={styles.desc}>{description}</p>
                        </div>
                    </span>
                   
                </div>
            )}
            <hr className={styles.spanService}></hr>
        </div>
    );
};
