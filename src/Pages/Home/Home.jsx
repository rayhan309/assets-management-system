import React from 'react';
import Banner from './Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import { ContactCTA, FAQSection, HowItWorks } from './ExtraSectioins/ExtraSections';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUs />
            <HowItWorks />
            <FAQSection />
            <ContactCTA />
        </div>
    );
};

export default Home;