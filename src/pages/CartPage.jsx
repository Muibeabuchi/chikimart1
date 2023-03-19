import Helmet from '../components/helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container,Row,Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import { deleteItem } from '../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function CartPage() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  // console.log(cartItems);
  const dispatch = useDispatch();

  const handleDelete = (id) =>{
    dispatch(deleteItem(id));
    toast.warning('item deleted successfully')
  }
  return (
    <Helmet title='Cart'>
      <CommonSection title='Shopping Cart' />

      <section>
        <Container>
          <Row>

            <Col lg='9' >
              <table className='table bordered'>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                {
                 cartItems.length == 0 ? <h2 className=' mt-4 !text-primary fs-4 text-center'>No items in your Cart</h2> : (cartItems?.map(item => {
                  const {imgUrl,quantity,price,productName,id} = item;
                  return <tbody key={id}>
                  <tr>
                    <th><img src={imgUrl} alt={productName} className='w-[50px] h-[50px] object-cover' /></th>
                    <th>{productName}</th>
                    <th>${price}</th>
                    <th>{quantity}</th>
                    <th><span onClick={()=>handleDelete(id)} className='cursor-pointer'><i className="ri-delete-bin-line"></i></span></th>
                  </tr>
                </tbody>

                 }) )
                }
              </table>
            </Col>

            <Col lg='3' >
              <div className="cart__checkout">
                <div className="flex items-center justify-between">
                  <h5 className='!text-[1rem]'>Subtotal</h5>
                  <p className='!text-primary font-bold text-[1.5rem]'>$ <span>{totalAmount}</span></p>
                </div>
                <p className='mt-3 mb-4'>taxes and shipping will calculate in checkout</p>
                <motion.button whileTap={{scale:1.2}} disabled={!totalQuantity>0} className=' tablet:text-[.9rem] w-full py-[8px] px-[20px] rounded-[5px] !bg-primary text-white cursor-pointer text-base mt-[10px]'>
                  {
                    totalQuantity > 0 ? <Link className='link' to ='/checkout'>Checkout</Link> : <p>No items</p>
                    
                  }
                  </motion.button>
                <motion.button whileTap={{scale:1.2}} className=' tablet:text-[.9rem] w-full py-[8px] px-[20px] rounded-[5px] !bg-primary text-white cursor-pointer text-base mt-[10px]'><Link className='link' to ='/shop'>Continue Shopping</Link></motion.button>
              </div>
            </Col>

          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default CartPage