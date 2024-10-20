import React from 'react';
import './contactCard.css';

const contactCard = ({ details, svg }) => {
    const { name, email, message, phone, createdAt } = details;
    const formattedDate = createdAt ? new Date(createdAt).toDateString() : 'No Date Available';

    return (
        <div className="card">
            <h2 className="name">{name}</h2>
            <h3 className="gmail">{email}</h3>
            <h3 className="msg">{message}</h3>
            <h4 className="ph">{phone}</h4>
            <h4 className="timeStamp">{formattedDate}</h4>
            {svg && <div className="svg-container">{svg}</div>}
        </div>
    );
};

export default contactCard;
