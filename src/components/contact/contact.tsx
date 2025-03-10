import classNames from 'classnames';
import styles from './contact.module.scss';
import React, { useState } from 'react';
import Reveal from 'react-reveal';

export interface ContactProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Contact = ({ className }: ContactProps) => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/xeoaqgre', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitted(true);
                form.reset();
            } else {
                alert('There was an error submitting the form. Please try again.');
            }
        } catch (error) {
            alert('There was an error submitting the form. Please try again.');
        }
    };

    return (
        <div className={classNames(styles.root, className)}>
            <Reveal effect="fadeInUp">
                <div className={styles.divContact}>
                    <h3 className={styles.h3Contact}>Partner With Us!</h3>
                    <h1 className={styles.h1Contact}>We would love to see your business succeed. Let us suit your Businesses needs.</h1>
                    
                    {!submitted ? (
                        <form
                            className={styles.contactForm}
                            onSubmit={handleSubmit}
                        >
                            <div className={styles.formGroup}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    required
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    required
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    required
                                    className={styles.textarea}
                                    rows={4}
                                />
                            </div>
                            <button type="submit" className={styles.divButton}>
                                Send Message
                            </button>
                        </form>
                    ) : (
                        <div className={styles.successMessage}>
                            <h2>Thank you for your message!</h2>
                            <p>We'll get back to you as soon as possible.</p>
                        </div>
                    )}
                </div>
            </Reveal>
        </div>
    );
};
