import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../page-css/catalog.css';
import '../page-css/total.css';
import Item from '../item/item';
import data from '../content/content.json';

export default function Galery(props) {
    let [content] = useState(data.localeENG)
    const [categoryStatus, setcategoryStatus] = useState(true)
    const [activeCategory, setActiveCategory] = useState('Категорії')
    const [categoryId, setCategoryId] = useState('')

    useEffect(() => {
        {window.scroll(0, 0)}
    })
       
    const activCategory = (el) => {
        setActiveCategory(el.categoryName)
        setCategoryId(el.categoryId)
        setcategoryStatus(categoryStatus === !categoryStatus)
    }

    return (
        <Container className='total-block' fluid>
            <Row className='total-header'>
                <Col className='total-header-col'>
                    <h2>Job we do</h2>
                </Col>
            </Row>
            <Row className='galery-block'>
                {categoryStatus === true ? (
                        <Row className='bread-crumb'>
                            <strong><span className="bread-crumb-category">Galery</span></strong>
                        </Row>
                    ) : (
                        <Row className='bread-crumb'>
                            <strong><span className="bread-crumb-category-active text-muted"onClick={() => setcategoryStatus(categoryStatus === false)}>Galery</span></strong>
                            <strong><span className="span">/ {activeCategory}</span></strong>
                        </Row>
                    )
                }
                <Row className='galery-img-block'>
                    {categoryStatus ? 
                        content.catalogpage.categorys.map(el => (
                            <Container key={el.id} onClick={() => activCategory(el)} className='galery-category'>
                                
                                    <Col className='galery-text'>
                                        <div className="galery-align-icon-div">
                                            <p>
                                                <strong><span className="galery-align-icon-p">{el.categoryName}</span></strong>
                                            </p>
                                            <p>
                                                <span className="galery-align-icon-p2">Test low text</span>
                                            </p>
                                        </div>
                                    </Col>
                                    <Col className='galery-img'>
                                        <div className='galery-img-div'>
                                            <img src={el.categoryImg} alt='' />
                                        </div>
                                    </Col>
                            </Container> 
                        )) : content.catalogpage.items.filter(catalogItems => catalogItems.category === categoryId ).map(el => 
                            <Item onShowItem={props.onShowItem} key={el.id} item={el}/>
                        )
                    }
                </Row>
            </Row>
        </Container>
    )
}