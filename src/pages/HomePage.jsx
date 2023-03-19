import { Col, Container, Row } from 'reactstrap';

import HeroImg from '../assets/images/hero-img.png';
import counterImg from '../assets/images/counter-timer-img.png';

import ProductsList from '../components/UI/ProductsList';
import Clock from '../components/UI/Clock';
import Services from '../services/Services';
import Helmet from '../components/Helmet/Helmet';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import products from '../assets/data/products';

import { useEffect, useState } from 'react';


function HomePage() {

  const [trendingProducts,setTrendingProducts] = useState([]);
  const [bestsalesProducts,setbestsalesProducts] = useState([]);
  const [newArrivals,setNewArrivals] = useState([]);
  const [wirelessProducts,setWirelessProducts] = useState([]);
  const [popularProducts,setPopularProducts] = useState([]);
  
  useEffect(()=>{
    const sofaData = products.filter((item) => item.category === 'sofa')
    const mobileData = products.filter((item)=> item.category == 'mobile')
    const wirelessData = products.filter((item)=> item.category == 'wireless')
    const chairData = products.filter((item) => item.category === 'chair')
    const watchData = products.filter((item) => item.category === 'watch')
    setTrendingProducts(chairData);
    setbestsalesProducts(sofaData);
    setNewArrivals(mobileData);
    setWirelessProducts(wirelessData);
    setPopularProducts(watchData);
  },[])

  const year = new Date().getFullYear();
  return (
    <Helmet title='Home'>
      <section className='hero__section bg-hero'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content pt-[45px] small:pt-0 small:mb-[40px]">
                <p className="hero__subtitle !text-primary font-medium tablet:!text-[.9rem]">Trending Products in {year}</p>
                <h2 className='laptop:!text-[2rem] tablet:!text-[1.6rem] !text-primary !text-[2.5rem] font-semibold !my-[20px] mx-[0px] leading-none'>Make Your Interior More Minimalistic & Modern</h2>
                <p  className='!text-primary leading-[28px] tablet:!text-[.9rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id voluptates illum libero doloremque ab! Veritatis.</p>
                <motion.button whileTap={{scale:1.1}} className='buy__btn tablet:text-[.9rem] py-[8px] px-[20px] rounded-[5px] !bg-primary text-white cursor-pointer text-base mt-[40px]'><Link to='/shop'className='link'> SHOP NOW </Link></motion.button>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className="hero__img">
                <img  src={HeroImg} alt="hero-image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />

      <section className="trending__products tablet:!py-[20px]">
        <Container>
          <Row>
            <Col lg='12'  className='text-center'>
              <h2 className="section__title !text-primary laptop:!text-[1.7rem] tablet:!text-[1.4rem]">Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className='tablet:!py-[20px]'>
        <Container>
          <Row>
            <Col lg='12' className='text-center '>
              <h2 className="section__title !text-primary ">Best Sales</h2>
            </Col>
              <ProductsList data={bestsalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer__count !bg-primary h-[18.75rem] tablet:!py-[20px]">
        <Container>
          <Row>
            <Col lg='6' md='12' className='text-center flex flex-column items-center mb-5'>
              <div className="clock__top-content mb-[5px] mt-[15px]">
                <h4 className='text-white fs-6 mb-2'>Limited Offer</h4>
                <h3 className='text-white fs-5 mb-3'>Quality Airmchair</h3>
              </div>
              <Clock />
              <motion.button whileTap={{scale:1.1}} className='buy__btn py-[8px] px-[20px] rounded-[5px] bg-white !text-primary cursor-pointer text-[.7rem] !font-bold mt-[40px]'><Link to='/shop'className='link'> VISIT STORE </Link></motion.button>
            </Col>
            <Col lg='6' md='12'className='text-end'>
              <img src={counterImg} alt="counter-image" className='w-[70%] h-[70%] object-contain tablet:hidden '/>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='new__arrivals tablet:!py-[20px]'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section__title !text-primary">New Arrivals</h2>
            </Col>
            <ProductsList data={newArrivals} />
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className='popular__products tablet:!py-[20px]'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section__title !text-primary">Popular in Category</h2>
            </Col>
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default HomePage