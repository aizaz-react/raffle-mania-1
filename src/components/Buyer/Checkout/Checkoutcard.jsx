import React from 'react'
import './Checkoutcard.css'
const Checkoutcard = () => {
    return (
        <>
        <div className='Carty-Card-Wrapper'>
            <div className="Carty-Card-Item">
                <div className="Carty-Item-11">
                    <div className="CI1-img1">
                        <img src="/images/Buyer/Cart/s1.svg" alt="" />
                    </div>
                    <div className="CI2-detail1">
                        <h1>New Shoes</h1>
                        <div className='CI2-D-sub1'>
                            <img src="/images/Buyer/Cart/s2.svg" alt="" />
                            <p>By Nike</p>
                        </div>
                    </div>
                </div>
                <div className="Carty-Item-21">
                    <div className="blank1"></div>
                    <div className="boo1">
                        <div className="tik-btn1">
                            <p>No. of Tickets: 1</p>
                        </div>
                        <div className="tik51">
                            <p>Ticket $5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr style={{ width: '100%', alignItems:'center' }} />
        </>
    )
}

export default Checkoutcard
