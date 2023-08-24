import { useState } from 'react';
import styles from './App.module.scss';
import { NavHeader } from './components/nav-header/nav-header';
import { Intro } from './components/intro/intro';
import { Spacer } from './components/spacer/spacer';
import { OurWork } from './components/our-work/our-work';
import { SpacerBlack } from './components/spacer-black/spacer-black';
import { MainStatement } from './components/main-statement/main-statement';
import { Services } from './components/services/services';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';


function App() {
    const [count, setCount] = useState(0);

    const services = [
        {
            id: 1,
            title: 'Web Design',
            description: 'des 1',
            bulletOne: 'Website design and management',
            bulletTwo: 'E-Commerce front and back-end support',
            bulletThree: 'On-call tech support',
        },
        {
            id: 2,
            title: 'Social Media Marketing',
            description: 'des 2',
            bulletOne: '',
            bulletTwo: '',
            bulletThree: '',
        },
        {
            id: 3,
            title: 'Technology',
            description: 'des3',
            bulletOne: '',
            bulletTwo: '',
            bulletThree: 'Equipment ',
        },
        {
            id: 4,
            title: 'Content Creation',
            description: 'des 4',
            bulletOne: '',
            bulletTwo: 'Product and business branding',
            bulletThree: 'Photography, videography and content creation',
        },
        {
            id: 5,
            title: 'Consulting',
            description: 'des5',
            bulletOne: 'Business Plans (Reduction and Expansion planning, Shifting Markets)',
            bulletTwo: 'Employee Compensation Strategies & Business Analytics',
            bulletThree: '',
        },
    ];

    return (
        <div className={styles.App}>
            <div />
            <NavHeader />
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

export default App;
