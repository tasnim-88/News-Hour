import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    // console.log(news);
    
    return (
        <div className=' rounded-lg shadow-sm mt-5 p-5 space-y-5'>
            <img src={news.image_url} alt="" />
            <h1 className='text-2xl font-bold'>{news.title}</h1>
            <p className='text-accent'>{news.details}</p>
            <Link to={`/category/${news.category_id}`} className='btn btn-secondary'><GoArrowLeft size={24}/>All news in this category</Link>
            
        </div>
    );
};

export default NewsDetailsCard;