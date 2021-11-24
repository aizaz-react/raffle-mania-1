import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="footer-left">
                    <h4>STAY CONNECTED</h4>
                    <div className="social-icons">
                        <img src="/images/footer/fb.svg" alt="" />
                        <img src="/images/footer/twitter.svg" alt="" />
                        <img src="/images/footer/insta.svg" alt="" />
                        <img src="/images/footer/messanger.svg" alt="" />
                        <img src="/images/footer/whatsapp.svg" alt="" />
                    </div>
                    <div className="p-tag">
                        <p>Copyright © 2010-2021 Raffle Mania. All rights reserved.</p>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="right-1">
                        <h4>SHOPPING WITH US</h4>
                        <p>Making Options</p>
                        <p>Delivery Options</p>
                        <p>Buyer Protection</p>
                    </div>
                    <div className="right-2">
                        <h4>CUSTOMER SERVICE</h4>
                        <p>Customer Service</p>
                        <p>Transaction Service</p>
                        <p>Take Our Feedback Service</p>
                    </div>
                    <div className="right-3">
                        <h4>COLLABORATE WITH US</h4>
                        <p>Partnerships</p>
                        <p>Affliate Program</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
