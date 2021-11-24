import React from 'react'
import './Carty.css'
import Navbar from '../../Navbar/Navbar'
import Search from '../../Search/Search'
import Footer from '../../Footer/Footer'
import CartItem from './Cartcard'
import { useNavigate } from 'react-router-dom'

const Carty = () => {
    const history = useNavigate();
    return (
        <>
            <header>
                <Navbar />
                <Search />
            </header>
            <div className="Carty-Wrapper">
                <div className="Carty-Container">
                    <div className="Carty-Left">
                        <div className="Carty-title">
                            <h1>Shopping Cart</h1>
                            <div className="boxes">
                                <label class="nhy">
                                    <input type="checkbox"/>
                                    <span class="checkmark"></span>
                                </label>
                                <p>Select All (6)</p>
                            </div>
                        </div>
                        <div className="Carty-cardo">
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                        </div>
                    </div>
                    <div className="Carty-Right">
                        <div className="Empty-3"></div>
                        <div className="Sumo-Summary">
                            <div className="Summary-o">
                                <h1>Order Summary</h1>
                            </div>
                            <div className="summary-details">
                                <div className="sd-l">
                                    <p>Total</p>
                                    <h5>$20.00</h5>
                                </div>
                                <div className="sd-l">
                                    <p>Discount</p>
                                    <h5>$00.00</h5>
                                </div>
                                <div className="sd-l">
                                    <p>Shipping Fee</p>
                                    <h5>$5.00</h5>
                                </div>
                                <div className="sd-l">
                                    <p>Tax</p>
                                    <h5>$4.00</h5>
                                </div>
                                <div className="sd-l">
                                    <p>Grand Total</p>
                                    <h5>$29.00</h5>
                                </div>
                            </div>
                            <div className="summary-button">
                                <button onClick={() => history("/Checkout")}>Confirm Order</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Carty
