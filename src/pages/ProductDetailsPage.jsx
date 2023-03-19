import { Link, useParams } from "react-router-dom";
// import {motion} from 'framer-motion';
import { Container,Row,Col } from "reactstrap";
import Helmet from '../components/Helmet/Helmet';
import products from '../assets/data/products';
import CommonSection from '../components/UI/CommonSection';
import { useDispatch } from "react-redux";
import {addItem} from '../redux/slices/cartSlice';
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-toastify";
import ProductsList from "../components/UI/ProductsList";


function ProductDetailsPage() {

  const [tab,setTab] = useState('desc');
  const [rating,setRating] = useState(null)
  const [email,setEmail] = useState('');
  const [reviewMessage,setReviewMessage] = useState('');
  const dispatch = useDispatch();
  const {id} = useParams();
  const singleProduct = products.find(item => item.id == id)
  const {id:productId,shortDesc,imgUrl,category,price,description,reviews,avgRating,productName} = singleProduct;
  const addToCart = ()=>{
    dispatch(addItem({
      id,imgUrl,price,productName
    }))
    toast.success('Item added successfully')
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    // if(!email && !reviewMessage) return;
    if(email && reviewMessage){
      toast.success('message submitted');
    }
  }
  function handleRating (e,rating){
    e.stopPropagation();
    setRating(rating)
  }
  const relatedProducts = products.filter(item =>item.category==category)
  
  return (
    <Helmet title={productName}>
      <CommonSection title={productName}/>

      <section className="py-[0]">

        <Container>
          <Row>
            <Col lg='6'>
              <div className="single__product-name">
                <img src={imgUrl} alt={productName} className='tablet:w-[60%]'/>
              </div>
            </Col>
            <Col lg='6'>
              <div className="single__product-details mt-[50px]">
                <h2 className="text-black !text-[1.8rem] !mb-[10px]">{productName}</h2>
                <div className="product__ratings flex  items-center gap-5 mb-3  " >
                  <div >
                  <span><i className="ri-star-s-fill text-[coral]"></i></span>
                  <span><i className="ri-star-s-fill text-[coral]"></i></span>
                  <span><i className="ri-star-s-fill text-[coral]"></i></span>
                  <span><i className="ri-star-s-fill text-[coral]"></i></span>
                  <span><i className="ri-star-half-s-fill text-[coral]"></i></span>
                  </div>
                  <p>( <span className="text-[coral] font-semibold">{avgRating}</span> ratings)</p>
                </div>

                <div className="flex items-center justify-between w-1/2">
                  <p className="font-medium !text-[1.3rem] !text-primary">${price}</p>
                  <p>Category: {category.toUpperCase()}</p>
                </div>
              </div>
              <p className="mt-3">{shortDesc}</p>
              <motion.button onClick={addToCart} className='tablet:text-[.9rem] py-[8px] px-[20px] rounded-[5px] !bg-primary text-white cursor-pointer text-base mt-[40px]' whileTap={{scale:1.1}}>Add To Cart</motion.button>
            </Col>
          </Row>
        </Container>
      </section>

      <section>

        <Container>
          <Row>
            <Col>
              <div className="tab__wrapper font-medium !text-[1rem] !text-primary flex gap-5 items-center">
                <h6 className={`${tab=='desc'?'font-bold':''} cursor-pointer`} onClick={()=>setTab('desc')}>Description</h6>
                <h6 className={`${tab=='rev'?'font-bold':''} cursor-pointer`} onClick={()=>setTab('rev')}>Reviews ({reviews.length})</h6>
              </div>

              {
                tab=='desc'? <div className="tab__content">
                <p className="mt-4">{description}</p>
              </div> : <div className="product__review">
                <div className="review__wrapper">
                  <ul className="mt-4">
                    {
                      reviews.map((item,index) => (
                        <li key={index} className="mb-4">
                          <p>Jhon Doe</p>
                          <span className="text-[coral] font-semibold">{item.rating} (rating)</span><p className="!mt-[10px]">{item.text}</p></li>
                      ) )
                    }
                  </ul>

                  <div className="review__form w-[70%] mx-auto !mt-[50px] tablet:w-full">
                    <h4 className="!text-[1.2rem] font-bold !text-primary !mb-[30px]">Leave Your Experience</h4>
                    <form onClick={handleSubmit}>
                      <div className="form__group mb-[30px]">
                        <input type="email" onChange={(e)=>setEmail(e.target.value)} required placeholder="Enter Your Email" value={email} className="focus:outline-none w-full border-[1px] !border-primary rounded-[5px] py-[8px] px-[20px]"/>
                      </div>
                      <div className="form__group mb-[30px] flex items-center gap-8 cursor-pointer tablet:justify-around tablet:gap-4">
                        <motion.span whileTap={{scale:1.2}} className={`${rating>=1?'text-[coral]':'text-gray'} flex items-center`} onClick={(e)=>handleRating(e,1)}>1<i className="ri-star-s-fill"></i></motion.span>
                        <motion.span  whileTap={{scale:1.2}} className={`${rating >= 2?'text-[coral]':'text-gray'} flex items-center`} onClick={(e)=>handleRating(e,2)}>2<i className="ri-star-s-fill"></i></motion.span>
                        <motion.span  whileTap={{scale:1.2}} className={`${rating>=3?'text-[coral]':'text-gray'} flex items-center`} onClick={(e)=>handleRating(e,3)}>3<i className="ri-star-s-fill"></i></motion.span>
                        <motion.span  whileTap={{scale:1.2}} className={`${rating>=4?'text-[coral]':'text-gray'} flex items-center`} onClick={(e)=>handleRating(e,4)}>4<i className="ri-star-s-fill"></i></motion.span>
                        <motion.span whileTap={{scale:1.2}}  className={`${rating==5?'text-[coral]':'text-gray'} flex items-center`} onClick={(e)=>handleRating(e,5)}>5<i className="ri-star-s-fill"></i></motion.span>
                      </div>
                      <div className="form__group">
                        <textarea type="text" required rows={4} placeholder="Review Message..." className="resize-none focus:outline-none w-full py-[8px] px-[20px] border-[1px] !border-primary rounded-[5px]"/>
                      </div>

                      <motion.button whileTap={{scale:1.1}} type='submit' value={reviewMessage} onChange={(e)=>setReviewMessage(e.target.value)} className='buy__btn tablet:text-[.9rem] py-[8px] px-[20px] rounded-[5px] !bg-primary text-white cursor-pointer text-base mt-[40px]'>SUBMIT</motion.button>
                    </form>
                  </div>
                </div>
              </div>
 
              }
            </Col>

            <Col lg='12'>
              <h2 className="related__products-title !mt-8" >You might also like</h2>
            </Col>

            <ProductsList data={relatedProducts}/>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default ProductDetailsPage