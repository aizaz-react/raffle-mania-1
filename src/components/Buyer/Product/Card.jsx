import React from 'react'
import './Card.css'
const Card = () => {
    return (
        <div>
            <div className="card-container">
                <div className="card-img">
                    <img src="/images/wishlist/pro1.svg" alt="" />
                    <div className="icon">
                        <img src="/images/Buyer/Landing/heart.svg" alt=""/>
                    </div>
                </div>
                <div className="card-content">
                    <div className="card-title-rating">
                        <p>Item</p>
                        <div className="card-rating">
                            <img src="/images/wishlist/star.svg" alt="" />
                            <p>4.7</p>
                        </div>
                    </div>
                    <div className="card-desc">
                        <p>Origial Price $30</p>
                    </div>
                    <div className="ticket">
                        <div className="ticket-con">
                           <p>Ticket $5</p> 
                        </div>
                        <div className="ticket-cart">
                            <img src="/images/wishlist/cart.svg" alt="" />
                        </div>
                    </div>
                    <div className="card-countdown">
                        <img src="/images/wishlist/timer.svg" alt="" />
                        <p>36:50:20</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
