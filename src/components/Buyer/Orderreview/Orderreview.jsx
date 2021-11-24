import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Search from '../../Search/Search'
import Footer from '../../Footer/Footer'
import './Orderreview.css'

import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';


const labels = {
  0.5: '0.5',
  1: '1',
  1.5: '1.5',
  2: '2',
  2.5: '2.5',
  3: '3',
  3.5: '3.5',
  4: '4',
  4.5: '4.5',
  5: '5',
};

const Orderreview = () => {

    const [value2, setValue2] = React.useState(4);
    const [hover, setHover] = React.useState(-1);
    return (
        <>
            <header>
                <Navbar />
                <Search />
            </header>
            <div className="Orderreview-Wrapper">
                <div className="Orderreview-Container">
                    <div className="Order-1">
                        <div className="Tracking-Title1">
                            <h1>Pending Raffles Review</h1>
                        </div>
                    </div>
                    <div className="Order-2">
                        <div className="Tracking-Left1">
                            <div className="Tracking-Left-img1">
                                <img src="/images/Buyer/Product/s1.svg" alt="" />
                            </div>
                            <div className="Tracking-Left-content1">
                                <p>Order #3ABc34D</p>
                                <h5>New Shoes</h5>
                                <p>Won Tickets: 1</p>
                                <h2>$120<span>.00</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="Order-3">
                        <button>Delivered</button>
                    </div>
                    <div className="Order-4">
                        <div className="O4-title">
                            <p>Select Rating</p>
                        </div>
                        <div className="O4-content">
                            <Rating
                                style={{fontSize: '2.5rem'}}
                                name="hover-feedback"
                                value={value2}
                                precision={0.5}
                                onChange={(event, newValue) => {
                                setValue2(newValue);
                                }}
                                onChangeActive={(event, newHover) => {
                                setHover(newHover);
                                }}
                                emptyIcon={<StarIcon style={{ color: '#C6C6C6' }} fontSize="inherit" />}
                            />
                            {value2 !== null && (
                                <Box style={{ color: 'white', fontSize: '1.4rem' }} sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value2]}</Box>
                            )}
                        </div>
                    </div>
                    <div className="Order-5">
                        <div className="O5-title">
                            <p>Add review</p>
                        </div>
                        <div className="O5-content">
                            <textarea placeholder='Write a review...' name="" rows="4" cols="50"></textarea>
                        </div>
                    </div>
                    <div className="Order-6">
                        <button>Submit</button>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Orderreview
