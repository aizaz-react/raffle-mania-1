import React from 'react'
import './Product.css'
import Navbar from '../../Navbar/Navbar'
import Search from '../../Search/Search'
import Footer from '../../Footer/Footer'
import Cardy from './Card'
import { useNavigate } from 'react-router-dom'

const Product = () => {
    const history = useNavigate();
    return (
        <>
            <header>
                <Navbar />
                <Search />
            </header>
            <div className="Product-Wrapper">
                <div className="Product-Container">
                    <div className="Product-Section-1">
                        <div className="Product-Section-1-left">
                            <div className="PS1-L">
                                <img src="/images/Buyer/Product/s1.svg" alt="" />
                                <img src="/images/Buyer/Product/s2.svg" alt="" />
                                <img src="/images/Buyer/Product/s1.svg" alt="" />
                            </div>
                            <div className="PS1-R">
                                <img src="/images/Buyer/Product/l1.svg" alt="" />
                            </div>
                        </div>
                        <div className="Product-Section-1-right">
                            <div className="PS1R-1">
                                <div className="PS1R-1-L">
                                    <h1>New Shoes</h1>
                                    <p>By Nike</p>
                                    <div className="Product-countdown">
                                        <img src="/images/Buyer/Product/timer.svg" alt="" />
                                        <p>30:10:20</p>
                                    </div>
                                </div>
                                <div className="PS1R-1-R">
                                    <div className="starry">
                                        <img src="/images/Buyer/Product/starry.svg" alt="" />
                                        <p>4.7</p>
                                    </div>
                                    <div className="ticktok">
                                        <div className="toktick">
                                            <p>Ticket $5</p>
                                        </div>
                                        <h1>$120<span>.00</span></h1>
                                    </div>
                                </div>
                            </div>
                            <div className="PS1R-2">
                                <div className="shinra">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium malesuada et ultrices sed eu. Habitasse vitae neque lectus tempus auctor elementum adipiscing. Eleifend sed ornare.</p>
                                </div>
                            </div>
                            <div className="PS1R-3">
                                <div className="PS1R-3-a">
                                    <p>Size</p>
                                </div>
                                <div className="PS1R-3-b">
                                    <button>40</button>
                                    <button>41</button>
                                    <button>42</button>
                                    <button>43</button>
                                    <button>44</button>
                                    <button>45</button>
                                </div>
                            </div>
                            <div className="PS1R-4">
                                <div className="PS1R-4-L">
                                    <p>Color</p>
                                    <div className="pallet">
                                        <div className="ball-1 ball"></div>
                                        <div className="ball-2 ball"></div>
                                        <div className="ball-3 ball"></div>
                                        <div className="ball-4 ball"></div>
                                    </div>
                                </div>
                                <div className="PS1R-4-R">
                                    <div className="count-button1">
                                        <div className="minus">-</div>
                                        <div className="amount">1</div>
                                        <div className="plus">+</div>
                                    </div>
                                </div>
                            </div>
                            <div className="PS1R-5">
                                <button onClick={() => history("/carty")}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="Product-Section-2">
                        <img src="/images/Buyer/Product/Vector.svg" alt="" />
                        <p>Reviews.</p>
                    </div>
                    <div className="Product-Section-3">
                        <div className="Review-Cardic">
                            <div className="Review-Cardic-Top">
                                <div className="RCT-L">
                                    <img src="/images/Buyer/Product/avatar.svg" alt="" />
                                    <div className="RCT-L-cont">
                                        <h4>Paityn Philips</h4>
                                        <p>2 days ago.</p>
                                    </div>
                                </div>
                                <div className="RCT-R">
                                    <img src="/images/Buyer/Product/star2.svg" alt="" />
                                    <p>4.7</p>
                                </div>
                            </div>
                            <div className="Review-Cardic-Bottom">
                                <p>Lorem ipsum dolor sit amet, consectetur sa adipiscing elit. Aliquam feugiat at sit in eni. Massa integer mattis semper dff et nisi id. Nulla maecenas purus neque tortor. Lorem ipsum dolor sit amet, consectetur sa adipiscing elit. Aliquam feugiat at sit in eni. Massa integer mattis semper dff et nisi id. Nulla maecenas purus neque tortor.</p>
                            </div>
                        </div>
                        <div className="Review-Cardic">
                            <div className="Review-Cardic-Top">
                                <div className="RCT-L">
                                    <img src="/images/Buyer/Product/avatar.svg" alt="" />
                                    <div className="RCT-L-cont">
                                        <h4>Paityn Philips</h4>
                                        <p>2 days ago.</p>
                                    </div>
                                </div>
                                <div className="RCT-R">
                                    <img src="/images/Buyer/Product/star2.svg" alt="" />
                                    <p>4.7</p>
                                </div>
                            </div>
                            <div className="Review-Cardic-Bottom">
                                <p>Lorem ipsum dolor sit amet, consectetur sa adipiscing elit. Aliquam feugiat at sit in eni. Massa integer mattis semper dff et nisi id. Nulla maecenas purus neque tortor. Lorem ipsum dolor sit amet, consectetur sa adipiscing elit. Aliquam feugiat at sit in eni. Massa integer mattis semper dff et nisi id. Nulla maecenas purus neque tortor.</p>
                            </div>
                        </div>
                        <div className="Review-Cardic">
                            <div className="Review-Cardic-Top">
                                <div className="RCT-L">
                                    <img src="/images/Buyer/Product/avatar.svg" alt="" />
                                    <div className="RCT-L-cont">
                                        <h4>Paityn Philips</h4>
                                        <p>2 days ago.</p>
                                    </div>
                                </div>
                                <div className="RCT-R">
                                    <img src="/images/Buyer/Product/star2.svg" alt="" />
                                    <p>4.7</p>
                                </div>
                            </div>
                            <div className="Review-Cardic-Bottom">
                                <p>Lorem ipsum dolor sit amet, consectetur sa adipiscing elit. Aliquam feugiat at sit in eni. Massa integer mattis semper dff et nisi id. Nulla maecenas purus neque tortor. Lorem ipsum dolor sit amet, consectetur sa adipiscing elit. Aliquam feugiat at sit in eni. Massa integer mattis semper dff et nisi id. Nulla maecenas purus neque tortor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="Product-Section-4">
                        <div className="Empty-1"></div>
                        <div className="Related-Products">
                            <h1>Related Products</h1>
                        </div>
                    </div>
                    <div className="Product-Section-5">
                        <div className="Empty-1"></div>
                        <div className="Related-Productss">
                            <Cardy />
                            <Cardy />
                            <Cardy />
                        </div>
                        
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Product
