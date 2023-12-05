import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import styles from './Home.module.scss';
import { Intro } from '../components/intro/intro';
import { Spacer } from '../components/spacer/spacer';
import { OurWork } from '../components/our-work/our-work';
import { SpacerBlack } from '../components/spacer-black/spacer-black';
import { MainStatement } from '../components/main-statement/main-statement';
import { Services } from '../components/services/services';
import { Contact } from '../components/contact/contact';
import { Footer } from '../components/footer/footer';


function Home() {
    const [count, setCount] = useState(0);

    const services = [
        {
            id: 1,
            title: 'Web Design',
            description: 'Premium Web Design using all modern technologies including React Typescript.',
            bulletOne: 'Website design and management',
            bulletTwo: 'E-Commerce front and back-end support',
            bulletThree: 'On-call tech support',
        },
        {
            id: 2,
            title: 'Social Media Marketing',
            description: 'Full Service Management following the latest trends and promotions.',
            bulletOne: 'Data Analytics and Marketing for Paid Advertising',
            bulletTwo: 'Content Creation including Video',
            bulletThree: 'Viewer Engaugement',
        },
        {
            id: 3,
            title: 'Technology',
            description: 'Up to Date Technology Services.',
            bulletOne: 'Hardware & Software Installation',
            bulletTwo: 'Web Application Developement',
            bulletThree: 'On-Call Tech Support',
        },
        {
            id: 4,
            title: 'Content Creation',
            description: 'Full Service content creation to fit all your busness needs from product design and prototyping, branding, etc',
            bulletOne: 'Product Design',
            bulletTwo: 'Business branding & Advertising',
            bulletThree: 'Photography, videography and content creation',
        },
        {
            id: 5,
            title: 'Consulting',
            description: 'From data metrics to assisting with Pricing adjustments to maxamize your profits, we have your back!',
            bulletOne: 'Business Planning and Startup',
            bulletTwo: 'Employee Compensation Strategies & Business Analytics',
            bulletThree: 'Competative market pricing',
        },
        {
            id: 6,
            title: 'Accessibility',
            description: 'We believe Accessibility is key for every website, no matter how small of a business.',
            bulletOne: 'We strive to adhear to all WCAG 2.1 & 2.2 requiremnts.',
            bulletTwo: 'Backed by up-to-date UserWay Accessibility widget.',
            bulletThree: 'We provides Accessibility Statements and website reports.',
        },
    ];

    return (
        <div className={styles.App}>
            <div />          
            <Intro />
            <SpacerBlack />
            <MainStatement />
            <Spacer />
            <OurWork />
            <Services services={services} />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
