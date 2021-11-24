import React from 'react'
import './Ordercardgreen.css'
import { useNavigate } from 'react-router-dom'

const Ordercardgreen = () => {
    const history = useNavigate();
    return (
        <div className='Order-card-green'>
            <div className="OD-left">
                <div className="OD-left-img">
                    <img src="/images/Buyer/Product/s1.svg" alt="" />
                </div>
                <div className="OD-left-content">
                    <p>Order #3Abc34D</p>
                    <h5>New Shoes</h5>
                    <div className="OD-small">
                        <img src="/images/Buyer/Product/tensa.svg" alt="" />
                        <p>By Nike</p>
                    </div>
                </div>
            </div>
            <div className="OD-right">
                <div className="OD-ticketg">
                    <div className="blank3"></div>
                    <div className="boo3">
                        <div className="ticket-btng">
                            <div className='ticket-btn-progressg'></div>
                            <p>In Progress</p>
                        </div>
                        <p>No. of Tickets: 1</p>
                        <div className="ticket-price5">
                            <p>Ticket Price $5</p>
                        </div>
                    </div>
                </div>
                <div className="OD-track">
                    <button onClick={() => history("/Tracking-Order")}>Track My Order</button>
                </div>
            </div>
        </div>
    )
}

export default Ordercardgreen
