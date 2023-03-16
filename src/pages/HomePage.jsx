import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import HeroImg from '../assets/images/hero-img.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';

import products from '../assets/data/products';
import { useEffect, useState } from 'react';


function HomePage() {

  const [trendingProducts,setTrendingProducts] = useState([]);
  const [bestsalesProducts,setbestsalesProducts] = useState([]);
  const sofaData = products.filter((item) => item.category === 'sofa')

  useEffect(()=>{
    const filteredData = products.filter((item) => item.category === 'chair')
    setTrendingProducts(filteredData);
  },[])

  const year = new Date().getFullYear();
  return (
    <Helmet title='Home'>
      <section className='hero__section bg-hero'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content pt-[45px]">
                <p className="hero__subtitle !text-primary font-medium">Trending Products in {year}</p>
                <h2 className='!text-primary text-[2.5rem] font-semibold !my-[20px] mx-[0px] leading-none'>Make Your Interior More Minimalistic & Modern</h2>
                <p  className='!text-primary leading-[28px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id voluptates illum libero doloremque ab! Veritatis.</p>
                <motion.button whileTap={{scale:1.2}} className='buy__btn py-[8px] px-[20px] rounded-[5px] !bg-primary text-white cursor-pointer text-base mt-[40px]'><Link to='/shop'className='link'> SHOP NOW </Link></motion.button>
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
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section__title !text-primary">Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section__title !text-primary">Best Sales</h2>
            </Col>
              <ProductsList data={sofaData} />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default HomePage