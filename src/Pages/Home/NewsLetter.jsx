import React, { useState } from 'react';
import Headline from '../../Shared/Headline';
import backgroundImage from '../../assets/newsletter-bg.jpg'; // Replace with your background image path

const NewsLetter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your email submission logic here
        console.log("Email submitted:", email);
        setEmail(''); // Clear the input field after submission
    };

    return (
        <div
            className="relative py-12"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <header>
                <Headline title={"News Letter"} subTitle={"Subscribe for Updates"} />
            </header>
            <div className="max-w-2xl mx-auto mt-8 relative z-10">
                <p className="text-white text-center mb-4 text-lg">
                    Stay updated with our latest news and exclusive offers. Subscribe to our newsletter!
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="input input-bordered flex-grow p-2 border rounded-md mb-4 md:mb-0 md:mr-2 py-3"
                        required
                    />
                    <button type="submit" className="btn btn-error bg-primary text-white p-2 rounded-md transition-colors duration-200 ">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewsLetter;
