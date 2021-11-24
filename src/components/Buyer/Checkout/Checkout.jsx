import React from 'react'
import './Checkout.css'
import Navbar from '../../Navbar/Navbar'
import Search from '../../Search/Search'
import Footer from '../../Footer/Footer'
import Checkoutcard from './Checkoutcard'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const history = useNavigate();
    return (
        <>
            <header>
                <Navbar />
                <Search />
            </header>
            <div className="Checkout-Wrapper">
                <div className="Checkout-Container">
                    <div className="checkout-left">
                        <div className="checkout-left-title">
                            <h4>Checkout</h4>
                            <p>Products (3)</p>
                        </div>
                        <div className="checkout-cards">
                            <Checkoutcard />
                            <Checkoutcard />
                            <Checkoutcard />
                        </div>
                        <div className="shipping-address">
                            <div className="address-title">
                                <p>Shipping Address</p>
                            </div>
                            <div className="address-form">
                                <p>Full Name</p>
                                <div className="zangetsu">
                                    <input Placeholder="Enter full name..." type="text" />
                                </div>
                                <p>Address</p>
                                <div className="zangetsu">
                                    <input Placeholder="Enter address..." type="text" />
                                </div>
                                <p>Phone</p>
                                <div className="zangetsu">
                                    <input Placeholder="Enter phone number..." type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="payment-method">
                            <div className="address-title">
                                <p>Payment Method</p>
                            </div>
                            <div className="mid-body1">
                                <div className="hello-world1">
                                    <div className="radio-b11">
                                        <label style={{marginTop: '3rem'}}>
                                            <input type="radio" name='kk1' />
                                            <div className="circle1"></div>
                                        </label>
                                        <img src="/images/payment/card.svg" alt="" />
                                        <h4>Credit Card</h4>
                                    </div>
                                    <div className="radio-b21">
                                        <label style={{marginTop: '3rem'}}>
                                            <input type="radio" name='kk1' />
                                            <div className="circle1"></div>
                                        </label>
                                        <img src="/images/payment/paypal.svg" alt="" />
                                    </div>
                                </div>
                                <div className="body31">
                                    <img src="/images/payment/union.svg" alt="" />
                                    <p>Add New Payment Method</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Carty-Right1">
                        <div className="Empty-31"></div>
                        <div className="Sumo-Summary1">
                            <div className="Summary-o1">
                                <h1>Order Summary</h1>
                            </div>
                            <div className="summary-details1">
                                <div className="sd-l1">
                                    <p>Total</p>
                                    <h5>$20.00</h5>
                                </div>
                                <div className="sd-l1">
                                    <p>Discount</p>
                                    <h5>$00.00</h5>
                                </div>
                                <div className="sd-l1">
                                    <p>Shipping Fee</p>
                                    <h5>$5.00</h5>
                                </div>
                                <div className="sd-l1">
                                    <p>Tax</p>
                                    <h5>$4.00</h5>
                                </div>
                                <div className="sd-l1">
                                    <p>Grand Total</p>
                                    <h5>$29.00</h5>
                                </div>
                            </div>
                            <div className="summary-button1">
                                <button>Confirm Order</button>
                            </div>
                        </div>
                        <div className="charmander">
                            <div className="zangetsu-s">
                                <input Placeholder="Enter Voucher Code" type="text" />
                            </div>
                            <div className="char-btn">
                                <button>Apply</button>
                            </div>
                        </div>
                        <div className="lizard">
                            <div className="liz-btn">
                                <button onClick={() => history("/Tracking-Order")}>Track My Order</button>
                            </div>
                            <p>Get A COUPON!</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
export default Checkout
