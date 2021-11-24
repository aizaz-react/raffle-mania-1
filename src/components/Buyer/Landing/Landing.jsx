import React from 'react'
import './Landing.css'
import Navbar from '../../Navbar/Navbar'
import Search from '../../Search/Search'
import Footer from '../../Footer/Footer'
import Card from './Card'

const Landing = () => {
    return (
        <>
            <header>
                <Navbar />
                <Search />
            </header>
            <div className="Landing-Wrapper">
                <div className="Landing-Container">
                    <div className="back-img">
                        <img src="/images/Buyer/Landing/background.svg" alt="no img" />
                        <img src="/images/Buyer/Landing/slider.svg" alt="" />
                    </div>
                    <div className="Section-1-head">
                        <p>Business Near Me</p>
                    </div>
                    <div className="Section-1">
                        <div className="S-1-left">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                        <div className="S-1-right">
                            <img src="/images/Buyer/Landing/ad1.svg" alt="" />
                        </div>
                    </div>
                    <div className="Section-2-head">
                        <p>Recently Added</p>
                    </div>
                    <div className="Section-2-Wrapper">
                        <div className="Section-2">
                            <div className="S-2-left">
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                            </div>
                            <div className="S-2-right">
                                <img src="/images/Buyer/Landing/ad2.svg" alt="" />
                            </div>
                        </div>
                        <div className="Section-3-head">
                            <p>Ending Soon</p>
                        </div>
                        <div className="S-3">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                    <div className="Section-4-Wrapper">
                        <div className="S-4-1">
                            <img src="/images/Buyer/Landing/Vector1.svg" alt="" />
                            <p>We offer competitive prices over 100 milllion items.</p>
                        </div>
                        <div className="S-4-1">
                            <img src="/images/Buyer/Landing/Vector2.svg" alt="" />
                            <p>We ship to over 200 countries and our site comes in 12 languages.</p>
                        </div>
                        <div className="S-4-1">
                            <img src="/images/Buyer/Landing/Vector3.svg" alt="" />
                            <p>Pay with the world most secure payment method.</p>
                        </div>
                        <div className="S-4-1">
                            <img src="/images/Buyer/Landing/Vector4.svg" alt="" />
                            <p>Our buyer protection policy cover your entire purchase journey.</p>
                        </div>
                    </div>
                    <div className="Section-5-Wrapper">
                        <div className="S-5-left">
                            <h1>Shop Better</h1>
                            <h5>Download The App</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget tempor cursus imperdiet molestie faucibus. Quis commodo, aenean a vitae non, gravida non laoreet.</p>
                        </div>
                        <div className="S-5-right">
                            <div class="flex social-btns">
                                <a class="app-btn blu flex vert" href="http:google.com">
                                    <img src="/gico.png" alt="" />
                                    <p>Get it on <br/> <span class="big-txt">Google Play</span></p>
                                </a>
                            </div>
                            <div class="flex social-btns">
                                <a class="app-btn blu flex vert" href="http:apple.com">
                                    <img src="/appico.svg" alt="" />
                                    <p>Download on the <br/> <span class="big-txt">App Store</span></p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Landing
