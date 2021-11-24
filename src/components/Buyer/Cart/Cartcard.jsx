import React from 'react'
import './Cartcard.css'
const Cartcard = () => {
    return (
        <div className='Carty-Card-Wrapper'>
            <div className="Carty-Card-Checkbox">
                <label class="nhy">
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                </label>
            </div>
            <div className="Carty-Card-Item">
                <div className="Carty-Item-1">
                    <div className="CI1-img">
                        <img src="/images/Buyer/Cart/s1.svg" alt="" />
                    </div>
                    <div className="CI2-detail">
                        <h1>New Shoes</h1>
                        <div className='CI2-D-sub'>
                            <img src="/images/Buyer/Cart/s2.svg" alt="" />
                            <p>By Nike</p>
                        </div>
                    </div>
                </div>
                <div className="Carty-Item-2">
                    <div className="tik-btn">
                        <p>No. of Tickets</p>
                        <div className="count-button">
                            <div className="minus">-</div>
                            <div className="amount">1</div>
                            <div className="plus">+</div>
                        </div>
                    </div>
                    <div className="tik5">
                        <p>Ticket $5</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cartcard
