import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
    return (
        <>
            <div className='subscribeComponant'>
                <input type='text' placeholder='name@gmail.com' name='subscriberEmail' />
                <button type='submit'>Subscribe</button>
            </div>
        </>
    )
}

export default Subscribe