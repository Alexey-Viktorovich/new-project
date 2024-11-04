import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";

import './carousel.css';
import data from '../content/content.json';

export default function CarouselHome(props) {
  let [content, setContent] = useState(data.localeUA)

  const {locale} = props;

  useEffect(() => {
      {locale ? setContent(content = data.localeUA) : setContent(content = data.localeENG)}
  })

  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className='d-block w-100 fon'
          src="https://www.newdesign.com.ua/wp-content/uploads/2014/07/Untitled-44-e1404910773612-663x391.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className='context'>
            <h1>Expert Property <br/> Renovation Services</h1>
            <p>Committed to Excellence</p>
            {/* <p>Committed to Excellence</p>
            <div className='d-flex buttons'>
                <a href="https://play.google.com/store/apps/details?id=com.greenko"
                  title=""
                  className='btn btn-primary'>Android</a>
                <a href="https://apps.apple.com/ua/app/greenwitch/id1545904233"
                  title=""
                  className='btn btn-primary btn-right no-js-color'>iOS</a>
            </div> */}
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item-2'>
        <img
          className="d-block w-100 fon"
          src="https://polyakova.biz/content/portfolio/117/previewlist-117.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className='context'>
            <h1>Expert Property <br/> Renovation Services</h1>
            <p>Committed to Excellence</p>
            {/* <p>{content.carusel.p2}</p>
            <div className='d-flex buttons'>
              <NavLink className='btn btn-primary' to="/catalog">
                <Nav>{content.carusel.button}</Nav>
              </NavLink>
            </div> */}
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item-3'>
        <img
          className="d-block w-100 fon"
          src="https://akvilonpro.ua/assets/images/dizajn/doma/hodosovka_500-m2/80_neoclassic_design_house_livingroom.jpg.pagespeed.ce.uCiKRIGjV2.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className='context'>
            <h1>Expert Property <br/> Renovation Services</h1>
            <p>Committed to Excellence</p>
            {/* <p>{content.carusel.p3}</p>
            <div className='d-flex buttons'>
                <a href="https://t.me/greenwitch_company"
                  title=""
                  className='btn btn-primary'>Telegram</a>
            </div> */}
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item-4'>
        <img
          className="d-block w-100 fon"
          src="https://kr-bud.com/wp-content/uploads/2020/05/interer-doma-iz-brusa_5d45e65b01bc0.jpg"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <div className='context'>
            <h1>Expert Property <br/> Renovation Services</h1>
            <p>Committed to Excellence</p>
            {/* <p>{content.carusel.p4}</p>
            <div className='d-flex buttons'>
                <a href="https://www.facebook.com/Greenwitch-112318907206992"
                  title=""
                  className='btn btn-primary'>Facebook</a>
            </div> */}
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item-5'>
        <img
          className='d-block w-100 fon'
          src="https://asart.com.ua/wp-content/uploads/2023/07/kuhnya-studiya-dom-63-24watermark-1024x559.jpg"
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <div className='context'>
            <h1>Expert Property <br/> Renovation Services</h1>
            <p>Committed to Excellence</p>
            {/* <p>{content.carusel.p5}</p>
            <div className='d-flex buttons'>
              <NavLink className='btn btn-primary' to="/catalog">
                <Nav>{content.carusel.button}</Nav>
              </NavLink>
            </div> */}
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}