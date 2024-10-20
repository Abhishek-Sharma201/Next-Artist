'use client'
import React from 'react'
import './NormalBtn.css'

const NormalBtn = ({ value, backgroundColor, radius, color, hover }) => {
    return (
        <button style={{
            '--backgroundColor': backgroundColor,
            '--borderRadius': radius,
            '--color': color,
            '--hoverColor': hover
        }} >
            {value}
        </button>
    )
}

export default NormalBtn