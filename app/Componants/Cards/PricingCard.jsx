'use client'
import React from 'react'
import './PricingCard.css'

const PricingCard = () => {
    return (
        <>
            <div className='pricingCard'>
                <img src='https://t4.ftcdn.net/jpg/05/64/99/95/360_F_564999540_XdTvqLGDpneB3v4ifz0SZgzxMOFmfoVo.jpg' alt='img' />
                <div className='cardDetails'>
                    <h4 className='name'>name</h4>
                    <h2 className='price'><sup>$</sup>199<sub>/m</sub></h2>
                    <button className='buyBtn'>Buy</button>
                </div>
            </div>
        </>
    )
}

export default PricingCard