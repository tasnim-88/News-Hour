import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-300 p-4'>
            <p className='text-white bg-secondary p-2'>Latest</p>
            <Marquee className='flex gap-5' pauseOnHover={true}>
                <p className='font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, minima?</p>
                <p className='font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, minima?</p>
                <p className='font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, minima?</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;