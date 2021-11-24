import React from 'react'
import './Trackingorder.css'
import Navbar from '../../Navbar/Navbar'
import Search from '../../Search/Search'
import Footer from '../../Footer/Footer'
import { useNavigate } from 'react-router-dom'

const Trackingorder = () => {
    const history = useNavigate();
    return (
        <>
            <header>
                <Navbar />
                <Search />
            </header>
            <div className="Tracking-Wrapper">
                <div className="Tracking-Container">
                    <div className="Tracking-Title">
                        <h1>Pending Raffles</h1>
                    </div>
                    <div className="Tracker">
                        <div className="Tracking-Left">
                            <div className="Tracking-Left-img">
                                <img src="/images/Buyer/Product/s1.svg" alt="" />
                            </div>
                            <div className="Tracking-Left-content">
                                <p>Order #3ABc34D</p>
                                <h5>New Shoes</h5>
                                <p>Won Tickets: 1</p>
                                <h2>$120<span>.00</span></h2>
                            </div>
                        </div>
                        <div className="Tracking-Right">
                            <div className="Tracking-Right-up">
                                <div className="box1">
                                    <div className="box1-img">
                                        <img src="/images/Buyer/Product/box.svg" alt="" />
                                    </div>
                                    <div className="box1-content">
                                        <p>Order Dispatched</p>
                                        <div className="b1">
                                            <p>02:32 PM</p>
                                            <p>02 May,21</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="box2">
                                    <div className="line1"></div>
                                </div>
                                <div className="box3">
                                    <div className="box3-img">
                                        <img src="/images/Buyer/Product/destination.svg" alt="" />
                                    </div>
                                    <div className="box3-content">
                                        <h5>Order Delievered</h5>
                                        <p>Expected delivery</p>
                                        <div className="b2">
                                            <p>02:32 PM</p>
                                            <p>02 May,21</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Tracking-Right-down">
                                <button onClick={() => history("/Order-Review")}>Received</button>
                            </div>
                        </div>
                    </div>
                    <div className="Tracker">
                        <div className="Tracking-Left">
                            <div className="Tracking-Left-img">
                                <img src="/images/Buyer/Product/s1.svg" alt="" />
                            </div>
                            <div className="Tracking-Left-content">
                                <p>Order #3ABc34D</p>
                                <h5>New Shoes</h5>
                                <p>Won Tickets: 1</p>
                                <h2>$120<span>.00</span></h2>
                            </div>
                        </div>
                        <div className="Tracking-Right">
                            <div className="Tracking-Right-up">
                                <div className="box1">
                                    <div className="box1-img">
                                        <img src="/images/Buyer/Product/box.svg" alt="" />
                                    </div>
                                    <div className="box1-content">
                                        <p>Order Dispatched</p>
                                        <div className="b1">
                                            <p>02:32 PM</p>
                                            <p>02 May,21</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="box2">
                                    <div className="line1"></div>
                                </div>
                                <div className="box3">
                                    <div className="box3-img">
                                        <img src="/images/Buyer/Product/destination.svg" alt="" />
                                    </div>
                                    <div className="box3-content">
                                        <h5>Order Delievered</h5>
                                        <p>Expected delivery</p>
                                        <div className="b2">
                                            <p>02:32 PM</p>
                                            <p>02 May,21</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Tracking-Right-down">
                                <button onClick={() => history("/Order-Review")}>Received</button>
                            </div>
                        </div>
                    </div>
                    <div className="Tracker">
                        <div className="Tracking-Left">
                            <div className="Tracking-Left-img">
                                <img src="/images/Buyer/Product/s1.svg" alt="" />
                            </div>
                            <div className="Tracking-Left-content">
                                <p>Order #3ABc34D</p>
                                <h5>New Shoes</h5>
                                <p>Won Tickets: 1</p>
                                <h2>$120<span>.00</span></h2>
                            </div>
                        </div>
                        <div className="Tracking-Right">
                            <div className="Tracking-Right-up">
                                <div className="box1">
                                    <div className="box1-img">
                                        <img src="/images/Buyer/Product/box.svg" alt="" />
                                    </div>
                                    <div className="box1-content">
                                        <p>Order Dispatched</p>
                                        <div className="b1">
                                            <p>02:32 PM</p>
                                            <p>02 May,21</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="box2">
                                    <div className="line1"></div>
                                </div>
                                <div className="box3">
                                    <div className="box3-img">
                                        <img src="/images/Buyer/Product/destination.svg" alt="" />
                                    </div>
                                    <div className="box3-content">
                                        <h5>Order Delievered</h5>
                                        <p>Expected delivery</p>
                                        <div className="b2">
                                            <p>02:32 PM</p>
                                            <p>02 May,21</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Tracking-Right-down">
                                <button onClick={() => history("/Order-Review")}>Received</button>
                            </div>
                        </div>
                    </div>
                    <div className="Tracker">
                        <div className="Tracking-Left">
                            <div className="Tracking-Left-img">
                                <img src="/images/Buyer/Product/s1.svg" alt="" />
                            </div>
                            <div className="Tracking-Left-content">
                                <p>Order #3ABc34D</p>
                                <h5>New Shoes</h5>
                                <p>Won Tickets: 1</p>
                                <h2>$120<span>.00</span></h2>
                            </div>
                        </div>
                        <div className="Tracking-Right">
                            <div className="Tracking-Right-up">
                                <div className="box1">
                                    <div className="box1-img">
                                        <img src="/images/Buyer/Product/box.svg" alt="" />
                                    </div>
                                    <div className="box1-content">
                                        <p>Order Dispatched</p>
                                        <div className="b1">
                                            <p>02:32 PM</p>
                                            <p>02 May,21</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="box2">
                                    <div className="line1"></div>
                                </div>
                                <div className="box3">
                                    <div className="box3-img">
                                        <img src="/images/Buyer/Product/destination.svg" alt="" />
                                    </div>
                                    <div className="box3-content">
                                        <h5>Order Delievered</h5>
                                        <p>Expected delivery</p>
                                        <div className="b2">
                                            <p>02:32 PM</p>
                                            <p>02 May,21</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Tracking-Right-down">
                                <button onClick={() => history("/Order-Review")}>Received</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Trackingorder
