import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import { addItem } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import {toast} from 'react-toastify';


function ProductCard({id,productName,imgUrl,price,category}) {
    const dispatch = useDispatch();

    function addToCart(){
        dispatch(
        addItem({
            id,
            productName,
            imgUrl,
            price,
        })
        );
        toast.success('Product added successfully')
        // console.log('item added to cart')
    }

    
  return (
    <Col lg='3' md='4' sm='6' className="cursor-pointer mb-2 small:!w-1/2">
        <div className="product__item cursor-pointer">
            <div className="product__img">
                <motion.img whileHover={{scale:0.9}} src={imgUrl} alt="" />
            </div>
            <div className="p-2 product__info">
                <h3 className="product__name text-[.9rem]  !text-primary font-bold mt-1"><Link to={`/shop/${id}`} className="link" >{productName}</Link></h3>
                <span className="text-[.9rem]">{category}</span>
            </div>
            <div className="product__card-bottom p-2  flex items-center justify-between">
                <span className="price text-[1.3rem] font-medium !text-primary">${price}</span>    
                <motion.span whileTap={{scale:1.2}} onClick={addToCart}><i className="ri-add-line text-[1.2rem] tablet:!text-[1rem] p-[5px] rounded-full cursor-pointer text-white !bg-primary"></i></motion.span>
            </div>   
        </div>
    </Col>
  )
}

export default ProductCard