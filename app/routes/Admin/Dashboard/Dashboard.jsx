import React from 'react'
import './style.css'
import Products from '../Products/Products'
import ContactWrapper from '../Contacts/ContactWrapper'
import Emails from '../Emails/Emails'
import SubscribersWrapper from '../Subscribers/SubscribersWrapper'

const Dashboard = () => {
    return (
        <div className="Container">
            <Products />
            <ContactWrapper />
            <Emails />
            <SubscribersWrapper />
        </div>
    )
}

export default Dashboard