import React from 'react'
import './Orderhistory.css'
import Navbar from '../../Navbar/Navbar'
import Search from '../../Search/Search'
import Footer from '../../Footer/Footer'
import Ordercardgreen from './Ordercardgreen'
import Ordercard from './Ordercard'
import { useNavigate } from 'react-router-dom'

const Orderhistory = () => {
    const history = useNavigate();
    return (
        <>
            <header>
                <Navbar />
                <Search />
            </header>
            <div className="Order-Wrapper">
                <div className="Order-Container">
                    <div className="Order-title">
                        <h4>Order History</h4>
                    </div>
                    <div className="Order-Cards">
                        <Ordercard />
                        <Ordercardgreen />
                        <Ordercard />
                        <Ordercardgreen />
                        <Ordercard />
                        <Ordercardgreen />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Orderhistory
