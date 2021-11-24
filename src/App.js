import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Userprofile from './components/Profile/Userprofile'
import Messages from './components/Messages/Messages';
import Payment from './components/Payment/Payment';
import Wishlist from './components/Wishlist/Wishlist';
import Store from './components/Store/Store';
import Store2 from './components/Store/Store2';
import Landing from './components/Buyer/Landing/Landing';
import Detail from './components/Buyer/Detail/Detail';
import Product from './components/Buyer/Product/Product';
import Carty from './components/Buyer/Cart/Carty';
import Checkoutcard from './components/Buyer/Checkout/Checkoutcard';
import Checkout from './components/Buyer/Checkout/Checkout';
import Orderhistory from './components/Buyer/Orderhistory/Orderhistory';
import Ordercard from './components/Buyer/Orderhistory/Ordercardgreen';
import Trackingorder from './components/Buyer/Trackingorder/Trackingorder';
import Orderreview from './components/Buyer/Orderreview/Orderreview';
import Pop1 from './components/Buyer/Pop/Pop1';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Buyer-Profile" element={<Userprofile />} />
          <Route path="/Messages" element={<Messages />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Store2" element={<Store2 />} />

          <Route path="/Checkoutcard" element={<Checkoutcard />} />
          <Route path="/Ordercard" element={<Ordercard />} />
          <Route path="/Pop1" element={<Pop1 />} />

          <Route path="/" element={<Landing />} />
          <Route path="/Details" element={<Detail />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Carty" element={<Carty />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Order-History" element={<Orderhistory />} />
          <Route path="/Tracking-Order" element={<Trackingorder />} />
          <Route path="/Order-Review" element={<Orderreview />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
