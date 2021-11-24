import React from 'react'
import './Ordercard.css'
import { useNavigate } from 'react-router-dom'

const Ordercard = () => {
    const history = useNavigate();
    return (
        <div className='Order-card-purple'>
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
                <div className="OD-ticket">
                    <div className="blank2"></div>
                    <div className="boo2">
                        <div className="ticket-btn">
                            <div className='ticket-btn-progress'></div>
                            <p>Delivered</p>
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

export default Ordercard
