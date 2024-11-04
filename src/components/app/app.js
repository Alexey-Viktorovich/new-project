import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavbarMenu from '../navbar/navbar';
import HomePage from '../pages/homePage';
import About from '../pages/about';
import Galery from '../pages/galery';
import Footer from '../footer/footer';
import OurRates from '../pages/ourRates';
import Contact from '../pages/contact';
import data from '../content/content.json';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            zakaz: [],
            showItem: false,
            fullItem: {},
            orderNumb: 0,
            content: data.localeENG,
            localeUA: true
        }

        this.onShowItem = this.onShowItem.bind(this)
    }


    onShowItem(item) {
        this.setState({fullItem: item})
        this.setState({showItem: !this.state.showItem})
    }


    render() {  
        return (
            <div className='app'>
                <Router basename="/new.project/">
                    <NavbarMenu orders={this.state.orders} 
                                count={this.state.orderNumb} 
                                locale={this.state.localeUA} 
                                onLocale={this.onLocale} 
                                onDelete={this.deleteOrder} />
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                                <Route path="/about-us" element={<About />} />
                                <Route path="/job-we-do" element={<Galery 
                                                                onShowItem={this.onShowItem} 
                                                                locale={this.state.localeUA} />} />
                                <Route path="/our-rates" element={<OurRates />} />
                                <Route path="/contact-details" element={<Contact />} />
                        </Routes>
                    <Footer />
                </Router>
            </div>
        )
    }
}