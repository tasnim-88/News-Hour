import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-10/12 mx-auto my-8'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-10/12 mx-auto my-8'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-10/12 mx-auto my-8 grid grid-cols-12 gap-3'>
                <section className='left_nav col-span-3'>
                    <LeftAside></LeftAside>
                </section>
                <section className='main col-span-6'>
                    <Outlet></Outlet>
                </section>
                <section className='right_nav col-span-3'>
                    <RightAside></RightAside>
                </section>
            </main>
        </div>
    );
};

export default HomeLayout;