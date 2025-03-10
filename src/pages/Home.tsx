import { Helmet } from 'react-helmet-async';
import styles from './Home.module.scss';
import { Intro } from '../components/intro/intro';
import { Spacer } from '../components/spacer/spacer';
import { OurWork } from '../components/our-work/our-work';
import { SpacerBlack } from '../components/spacer-black/spacer-black';
import { MainStatement } from '../components/main-statement/main-statement';
import { Services } from '../components/services/services';
import { Contact } from '../components/contact/contact';

function Home() {
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

    // Schema markup for LocalBusiness
    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Optionality Business Solutions",
        "description": "Premium web design, social media marketing, technology services, content creation, and business consulting in Southern California.",
        "url": "https://optionality.biz",
        "email": "contact@optionality.biz",
        "areaServed": "Southern California",
        "serviceType": ["Web Design", "Social Media Marketing", "Technology Services", "Content Creation", "Business Consulting"],
    };

    return (
        <>
            <Helmet>
                <title>Optionality Business Solutions | Web Design & Digital Marketing Services</title>
                <meta name="description" content="Transform your business with our premium web design, social media marketing, and technology services. Southern California's trusted partner for digital success." />
                <meta name="keywords" content="web design, social media marketing, business consulting, technology services, Southern California, digital marketing, content creation" />
                
                {/* Open Graph / Social Media Meta Tags */}
                <meta property="og:title" content="Optionality Business Solutions | Web Design & Digital Marketing Services" />
                <meta property="og:description" content="Transform your business with our premium web design, social media marketing, and technology services. Southern California's trusted partner for digital success." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://optionality.biz" />
                
                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Optionality Business Solutions | Digital Services" />
                <meta name="twitter:description" content="Premium web design, social media marketing, and technology services in Southern California." />
                
                {/* Additional SEO Meta Tags */}
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://optionality.biz" />
                
                {/* Schema.org JSON-LD */}
                <script type="application/ld+json">
                    {JSON.stringify(schemaMarkup)}
                </script>
            </Helmet>

            <article className={styles.App}>
                <header>
                    <Intro />
                </header>
                
                <SpacerBlack />
                
                <section id="about">
                    <MainStatement />
                </section>
                
                <Spacer />
                
                <section id="our-work" aria-label="Our Work">
                    <OurWork />
                </section>
                
                <section id="services" aria-label="Our Services">
                    <Services services={services} />
                </section>
                
                <section id="contact" aria-label="Contact Us">
                    <Contact />
                </section>
            </article>
        </>
    );
}

export default Home;
