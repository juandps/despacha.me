import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Preloader from './components/layouts/Preloader';
import Newsletter from './components/layouts/Newsletter';
import Home from './components/pages/Home';
import Hometwo from './components/pages/Hometwo';
import Homethree from './components/pages/Homethree';
import About from './components/pages/About';
import Bloggrid from './components/pages/Bloggrid';
import Bloglist from './components/pages/Bloglist';
import Blogmasonary from './components/pages/Blogmasonary';
import Postsingle from './components/pages/Postsingle';
import Cart from './components/pages/Cart';
import Checkout from './components/pages/Checkout';
import Legal from './components/pages/Legal';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Wishlist from './components/pages/Wishlist';
import Error from './components/pages/Error';
import Shopone from './components/pages/Shopone';
import Shoptwo from './components/pages/Shoptwo';
import Shopthree from './components/pages/Shopthree';
import Shopfour from './components/pages/Shopfour';
import Productsingle from './components/pages/Productsingle';
import Productsingletwo from './components/pages/Productsingletwo';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <Preloader/>
      <Newsletter/>
      <Switch>
        <Route exact path="/" component={Homethree} />
        <Route path="/cart" component={Cart}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/legal" component={Legal}/>
        <Route path="/login" component={Login}/>
        {/*Hola commits */}
        <Route path="/register" component={Register}/>
        <Route path="/error" component={Error}/>
        <Route path="/product-single" component={Productsingle}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;
