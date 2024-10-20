import React from 'react'
import './FeatureCard.css'

const FeatureCard = ({ icon, title, description }) => {
    return (
        <>
            <div className='featureCard'>
                <div className='cardIcon'>
                    {icon}
                </div>
                <h2 className='cardTitle'>{title}</h2>
                <p className='cardDescription'>
                    {description}
                </p>
            </div>
        </>
    )
}

export default FeatureCard
