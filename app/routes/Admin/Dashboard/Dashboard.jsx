import React from 'react'
import './style.css'
import Products from '../Products/Products'
import Contacts from '../Contacts/Contacts'
import Emails from '../Emails/Emails'
import Subscribers from '../Subscribers/Subscribers'

const Dashboard = () => {
    return (
        <div className="Container">
            <Products />
            <Contacts />
            <Emails />
            <Subscribers />
        </div>
    )
}

export default Dashboard