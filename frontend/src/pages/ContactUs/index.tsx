import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactDetails from './ContactDetails/ContactDetails';
import MapEmbed from './MapDetails/MapDetails';
import contact from '../../assets/img/contact.jpg'

const ContactUs: React.FC = () => {
    return (
        <>
            <section className="relative bg-cover bg-center bg-no-repeat" style={{ position: 'relative' }}>
                <img src={contact} alt="Contact-Us" className="absolute w-full h-full object-cover top-0 left-0 z-1" style={{ opacity: 0.5 }} />
                <div className="absolute w-full h-full left-0 top-0 z-2" style={{ backgroundColor: 'rgba(0, 124, 50, 0.7)' }}></div>
                <div className="container p-16 relative z-3">
                    <div className="w-10/12 m-auto pt-10 pb-7">
                        <div className="text-center">
                            <h1 className="text-5xl xl:text-6xl font-bold text-white text-center leading-none mb-3">Contact Us</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container mx-auto px-3 sm:px-0 py-10 md:py-20'>
                    <div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
                            <ContactForm />
                            <ContactDetails />
                        </div>
                        <MapEmbed />
                    </div>
                </div>
            </section>
        </>   
    );
};

export default ContactUs;