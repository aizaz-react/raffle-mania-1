import React from 'react'
import './Pop1.css'
const Pop1 = () => {
    return (
        <>
            <div className="center">
                <input type="checkbox" className='click' />
                <label htmlFor="click" className='click-me'>Buy Now</label>
                <div className="content">
                    <div className="header">
                        <h2>RAFFLE<br />CONFIRMATION</h2>
                        <label htmlFor="click" className='fas fa-check'></label>
                        <p>Your Raffle has been successfully<br />purchased</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pop1
