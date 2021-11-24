import React from 'react'
import './Detail.css'
import Navbar from '../../Navbar/Navbar'
import Search from '../../Search/Search'
import Footer from '../../Footer/Footer'
import Card from './Card'

import useStyles from './styles'

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

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
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function valuetext(value) {
  return `${value}°C`;
}

const Detail = () => {
    const classes = useStyles();

    const [value2, setValue2] = React.useState(4);
    const [hover, setHover] = React.useState(-1);

    const [value, setValue] = React.useState([20, 37]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <header>
                <Navbar />
                <Search />
            </header>
            <div className="Detail-Wrapper">
                <div className="Detail-Container">
                    <div className="Detail-Top">
                        <div className="Detail-title">
                            <div className="Empty">

                            </div>
                            <div className="Detail-Head">
                                <h1>Business Near Me</h1>
                            </div>
                        </div>
                        <div className="Detail-Content">
                            <div className="Detail-Cat">
                                <div className="Detail-cat-kat">
                                    <div className="katty-1">
                                        <h1>Filter</h1>
                                    </div>
                                    <div className="katty-2">
                                        <div className="kat2-1">
                                            <button>Raffles <br />Ending Soon</button>
                                        </div>
                                        <div className="kat2-2">
                                            <button>Raffles <br />Recently Added</button>
                                        </div>
                                    </div>
                                    <div className="katty-3">
                                        <button>Filter by Location</button>
                                    </div>
                                    <div className="katty-4">
                                        <p>Category</p>
                                        <div className="Menuz dropdown">
                                            <div class="dropdown-select">
                                                <span class="select">Select the category...</span>
                                                <img src="/images/Buyer/Product/drop.svg" alt="" style={{width: '2rem'}}/>
                                            </div>
                                            <div class="dropdown-list">
                                                <div class="dropdown-list__item">Pepsi</div>
                                                <div class="dropdown-list__item">Coca</div>
                                                <div class="dropdown-list__item">Monster</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="katty-5">
                                        <p>Price Range</p>
                                    </div>
                                    <div className="katty-6">
                                        <Slider
                                            getAriaLabel={() => 'Temperature range'}
                                            value={value}
                                            onChange={handleChange}
                                            valueLabelDisplay="auto"
                                            getAriaValueText={valuetext}
                                        />
                                    </div>
                                    <div className="katty-7">
                                        <p>Product Rating</p>
                                    </div>
                                    <div className="katty-8">
                                        <Rating
                                            className={classes.rating}
                                            style={{fontSize: "3rem", gap: '1rem'}}
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
                                        {value !== null && (
                                            <Box style={{ color: 'white', fontSize: "1.6rem", marginRight: '2rem', fontFamily: 'Ubuntu', }} sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value2]}</Box>
                                        )}
                                    </div>
                                    <div className="katty-9">
                                        <button>Apply</button>
                                    </div>
                                </div>
                                <div className="Detail-ad1">
                                    <img src="/images/Buyer/Landing/ad1.svg" alt="" />
                                </div>
                                <div className="Detail-ad2">
                                    <img src="/images/Buyer/Landing/ad2.svg" alt="" />
                                </div>
                            </div>
                            <div className="Detail-Cards">
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                            </div>
                        </div>
                    </div>
                    <div className="Detail-Bottom">
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
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Detail
