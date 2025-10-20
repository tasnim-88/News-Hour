import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import RightAside from '../Components/HomeLayout/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../Components/NewsDetailsCard';

const NewsDetails = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const [news, setNews] = useState({})
    // console.log(data, id, news);

    useEffect(() => {
        const details = data.find((singleNews) => singleNews.id == id)
        setNews(details)
    }, [data, id])

    return (
        <div>
            <header className='w-10/12 mx-auto py-5'>
                <Header></Header>
            </header>
            <main className='w-10/12 mx-auto py-5 grid grid-cols-12 gap-5'>
                <section className='col-span-9'>
                    <h2 className='text-xl font-bold'>Dragon News</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <section className='col-span-3'>
                    <RightAside></RightAside>
                </section>
            </main>
        </div>
    );
};

export default NewsDetails;