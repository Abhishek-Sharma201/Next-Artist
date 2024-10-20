'use client';
import React, { useState } from 'react';
import './style.css';
import SideNav from '../../Componants/Nav/SideNav';
import Dashboard from './Dashboard/Dashboard';
import Emails from './Emails/Emails';
import Contacts from './Contacts/Contacts';
import Subscribers from './Subscribers/Subscribers';
import Products from './Products/Products'
import { useRouter } from 'next/navigation';

const Admin = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('Dashboard');

    const handleTabChange = (tab) => {
        if (tab === 'Home') {
            router.push('/');
        } else {
            setActiveTab(tab);
        }
    };

    const renderComponent = () => {
        switch (activeTab) {
            case 'Dashboard':
                return <Dashboard />;
            case 'Contacts':
                return <Contacts />;
            case 'Products':
                return <Products />;
            case 'Subscribers':
                return <Subscribers />;
            case 'Emails':
                return <Emails />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className="wrapper">
            <SideNav initialTab={activeTab} handleTabChange={handleTabChange} />
            <div className="content">
                {renderComponent()}
            </div>
        </div>
    );
};

export default Admin;
