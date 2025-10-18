import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div>
            <h1 className='font-bold'>Find Us On</h1>
            <div className="join join-vertical w-full mt-5">
                <button className="btn join-item justify-start bg-base-100 text-accent"><FaFacebook size={24}/>Facebook</button>
                <button className="btn join-item justify-start bg-base-100 text-accent"><FaInstagram size={24}/>Instagram</button>
                <button className="btn join-item justify-start bg-base-100 text-accent"><FaXTwitter size={24}/>X</button>
            </div>
        </div>
    );
};

export default FindUs;