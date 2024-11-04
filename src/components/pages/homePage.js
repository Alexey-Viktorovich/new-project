import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CarouselHome from '../carousel/carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../page-css/homePage.css';

export default function HomePage() {
    useEffect(() => {
        {window.scroll(0, 0)}
    })

    return (
        <Container fluid className='root'>
            <CarouselHome />
            <div className='info-block-app'>
                <Container className='info-bg'>
                    <Row className='info-bg-block'>
                        <Col className='info-text'>
                            <div className='info-text-div'>
                                <div className='info-text-img1'>
                                    <div>
                                        <img src="https://static.wixstatic.com/media/c0a341_ccc997c849da4f29bc985e94e6552e04~mv2.jpg/v1/fill/w_714,h_476,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Sherbrooke%20Rd2123.jpg" alt="Kitchen"  loading="lazy" />
                                        {/* width="570" height="380" */}
                                    </div>
                                </div>
                                <div className='info-text-text'>
                                        <p>Painting the big picture</p>
                                        <div class="horizontal-line" ></div>
                                </div>
                                <div className='info-text-img2'>
                                    <div>
                                        <img src="https://static.wixstatic.com/media/c0a341_4c694d6fb2384eb9b920f8be1a6a4dcb~mv2.jpg/v1/fill/w_339,h_509,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Sherbrooke%20Rd2076.jpg" alt="Kitchen" loading="lazy" />
                                        {/* width="270" height="405" */}
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className='info-text2'>
                            <h1>Why Choose KJ</h1>
                            <p>When you go big, we go big. 05 Group can build Luxury Homes with budgets in excess of £5Million and manage significant development projects in their entirety. We work with architects and other professionals to turn dreams into drawings into bricks and mortar – and wood and glass and steel. So if you envisage a plot of land becoming your Forever Home, we have the capacity and the capabilities to realize that ambition. For 05 group, the Sky’s the Limit, whether it’s a ten storey building or a basement build.</p>
                        </Col>
                    </Row>
                </Container>
                <Container className='products-bg d-flex'>
                    <Container className='products-bg-row'>
                        <Row className='products-item'>
                            <div className='products-card'>
                                <div>
                                    <img src="https://static.wixstatic.com/media/11062b_8eb3e1d795c547e88656bc37a68a0b47~mv2.jpg/v1/fill/w_388,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Kitchen.jpg" alt="Kitchen" loading="lazy" />
                                    {/* width="310" height="400"  */}
                                </div>
                            </div>
                            <div className='products-card-center'>
                                <div>
                                    <img src="https://static.wixstatic.com/media/11062b_330351e1fabf47bea4bd80217dcd0680~mv2.jpg/v1/fill/w_388,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Modern%20Kitchen.jpg" alt="Kitchen" loading="lazy" />
                                    {/* width="310" height="400"  */}
                                </div>
                            </div>
                            <div className='products-card'>
                                <div>
                                    <img src="https://static.wixstatic.com/media/nsplsh_5995e2fe80c849feac480a5c1e6380fe~mv2.jpg/v1/fill/w_388,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20R%20ARCHITECTURE.jpg" alt="Kitchen" loading="lazy" />
                                    {/* width="310" height="400"  */}
                                </div>
                            </div>
                        </Row>
                    </Container>
                </Container>
                <Container className='team'>
                    <Row className='team-block'>
                        <Row className='team-title'>
                            <Col>
                                <h3 className='text-muted'>WORKING WITH THE WORLD'S BEST SUPPLIERS.</h3>
                                <div className='hr-line'>
                                    <hr/>
                                </div>
                            </Col>  
                        </Row>
                        <div className='partners-icon'>
                            <Col className='partners-icon-block'>
                                <div>
                                    <a rel="nofollow" className="partners-icon-img" href="https://www.lifecell.ua/uk" title="Мобільний оператор lifecell">
                                        <img alt="Мобільний оператор lifecell" width="119" height="41" loading="lazy" fetchpriority="auto" ng-img="true" src="https://cdn.easypay.ua/images/home-page/lifecell.svg" />
                                    </a>
                                </div>
                            </Col>
                            <Col className='partners-icon-block'>
                                <div>
                                    <a rel="nofollow" className="partners-icon-img" href="https://kiev.kabanchik.ua/ua" title="Онлайн сервіс замовлення послуг Кабанчик">
                                        <img alt="Онлайн сервіс замовлення послуг Кабанчик" width="162" height="40" loading="lazy" fetchpriority="auto" ng-img="true" src="https://cdn.easypay.ua/images/home-page/kabanchik_ua.png" />
                                    </a>
                                </div>
                            </Col>
                            <Col className='partners-icon-block'>
                                <div>
                                    <a rel="nofollow" className="partners-icon-img" href="https://gas.ua/" title="Нафтогаз України|Газ для населення">
                                        <img alt="Нафтогаз України|Газ для населення" width="147" height="33" loading="lazy" fetchpriority="auto" ng-img="true" src="https://cdn.easypay.ua/images/home-page/naftogaz-op.svg" />
                                    </a>
                                </div>
                            </Col>
                            <Col className='partners-icon-block'>
                                <div>
                                    <a rel="nofollow" className="partners-icon-img" href="https://yasno.com.ua/" title="YASNO|Постачальник електроенергії та газу">
                                        <img alt="YASNO|Постачальник електроенергії та газу" width="113" height="33" loading="lazy" fetchpriority="auto" ng-img="true" src="https://cdn.easypay.ua/images/home-page/yasno.svg" />
                                    </a>
                                </div>
                            </Col>
                            <Col className='partners-icon-block'>
                                <div>
                                    <a rel="nofollow" className="partners-icon-img" href="https://glovoapp.com/ua/uk/" title="Glovo">
                                        <img alt="Glovo" width="119" height="33" loading="lazy" fetchpriority="auto" ng-img="true" src="https://about.glovoapp.com/_nuxt/img/logo.b0f6ef1.svg" />
                                    </a>
                                </div>
                            </Col>
                            <Col className='partners-icon-block'>
                                <div>
                                    <a rel="nofollow" className="partners-icon-img" href="https://answear.ua/c/vona" title="Answear">
                                        <img alt="Онлайн сервіс замовлення послуг Кабанчик" width="162" height="40" loading="lazy" fetchpriority="auto" ng-img="true" src="https://cdn.ans-media.com/assets/front/multi/static/images/logoAnswear.svg" />
                                    </a>
                                </div>
                            </Col>
                            <Col className='partners-icon-block'>
                                <div>
                                    <a rel="nofollow" className="partners-icon-img" href="https://gas.ua/" title="Adidas">
                                        <img alt="Adidas Україна" width="147" height="33" loading="lazy" fetchpriority="auto" ng-img="true" src="https://www.adidas.ua/_nuxt/0ecd5b5c3606bad08c6d205ad8858e05.svg" />
                                    </a>
                                </div>
                            </Col>
                            <Col className='partners-icon-block'>
                                <div>
                                    <a rel="nofollow" className="partners-icon-img" href="https://yasno.com.ua/" title="Columbia Greater Rewards">
                                        <img alt="Columbia Greater Rewards" width="113" height="33" loading="lazy" fetchpriority="auto" ng-img="true" src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/CGR_couponpage_logo?$aem_png$" />
                                    </a>
                                </div>
                            </Col>
                        </div>
                    </Row>                    
                </Container>
            </div>
        </Container>
    )
}