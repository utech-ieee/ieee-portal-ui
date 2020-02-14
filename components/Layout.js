import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar/Navbar';

const Layout = () => {
    return (
        <div>
            <Head>
                <title>IEEE UTECH</title>
            </Head>
            <Navbar />
        </div>
    );
};

export default Layout;
