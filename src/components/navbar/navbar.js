import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";

import './navb.css';

export default function NavbarMenu(props) {
  let [cartOpen, setCartOpen] = useState(false)
  let [menuBurger, setMenuBurger] = useState(false)
  // let [auseCount, setAuseCount] = useState(0)   //для зміни стану лічильника, щоб з'явилась прихована кнопка авторизації. Треба на кнопці змінити класнейм та повісити обробник подій на якийсь елемент

  //для зміни стану лічильника, щоб з'явилась прихована кнопка авторизації. Треба на кнопці змінити класнейм та повісити обробник подій на якийсь елемент
  // const clickCountAuse = () => {
  //   setAuseCount(auseCount +1)
  // }

  
  const showElemen = () => {
    let cart = cartOpen
    let menu = menuBurger
  
    if (cart && menu === true) {
      setCartOpen(cartOpen = !cartOpen)
      setMenuBurger(menuBurger = !menuBurger)
    } else if (cart === true) {
      setCartOpen(cartOpen = !cartOpen)
    } else if (menu === true) {
      setMenuBurger(menuBurger = !menuBurger)
    } else if (cart === true && menu === false) {
      setCartOpen(cartOpen = !cartOpen)
    } else if (menu === false) {
      setMenuBurger(menuBurger = !menuBurger)
    }
  }
  
  let classNameBurger = 'menu-burger'
  if (menuBurger === true) {
    classNameBurger += ' active'
  }

  let classNameMenuBat = 'menu-btn'
  if (menuBurger === true) {
    classNameMenuBat += ' active'
  }

  //для зміни стану лічильника, щоб з'явилась прихована кнопка авторизації. Треба на кнопці змінити класнейм та повісити обробник подій на якийсь елемент
  // let classNameAuse = 'ause'
  // if (auseCount > 5) {
  //   classNameAuse += '-activ'
  // }

  const button = {
    padding: 3,
    margin: 3
  }

  return (
    <>
      <Navbar fixed='top' className='padtop'>
        <Container fluid>
          <Nav>
            <NavLink className='img-block' to="/">
              <img
                alt=""
                src="./favicon1.png"
                width="100"
                height="47"
                className='d-inline-block align-top'
              />
            </NavLink>
          </Nav>
          <Nav className='nav-classic'>
            <NavLink to="/" className='nav-tab'>
                <Nav style={button}>Home</Nav>
            </NavLink>
            <NavLink to="/about-us" className='nav-tab'>
                <Nav style={button}>About us</Nav>
            </NavLink>
            <NavLink to="/job-we-do" className='nav-tab'>
                <Nav style={button}>Job we do</Nav>
            </NavLink>
            <NavLink to="/our-rates" className='nav-tab'>
                <Nav style={button}>Our rates</Nav>
            </NavLink>
            <NavLink to="/contact-details" className='nav-tab'>
                <Nav style={button}>Contact details</Nav>
            </NavLink>
          </Nav>
          <div className={classNameMenuBat} onClick={() => showElemen()}>
            <span></span>
          </div>
        </Container>
        <div className={classNameBurger}>
        <div className='none' onClick={() => showElemen()}></div>
          <div className='burger-col'>
            <NavLink onClick={() => showElemen()} to="/" className='nav-tab'>
                <Nav style={button}>Home</Nav>
            </NavLink>
            <NavLink onClick={() => showElemen()} to="/about-us" className='nav-tab'>
                <Nav style={button}>About us</Nav>
            </NavLink>
            <NavLink onClick={() => showElemen()} to="/job-we-do" className='nav-tab'>
                <Nav style={button}>Job we do</Nav>
            </NavLink>
            <NavLink onClick={() => showElemen()} to="/our-rates" className='nav-tab'>
                <Nav style={button}>Our rates</Nav>
            </NavLink>
            <NavLink onClick={() => showElemen()} to="/contact-details" className='nav-tab'>
                <Nav style={button}>Contact details</Nav>
            </NavLink>
          </div>
        </div>
      </Navbar>
    </>
  );
}