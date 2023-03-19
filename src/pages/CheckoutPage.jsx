import { useSelector } from "react-redux";
import { Container,Col,Row,Form,FormGroup } from "reactstrap"
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';


function CheckoutPage() {
  const totalQuantity = useSelector(state=>state.cart.totalQuantity);
  const totalAmount = useSelector(state=>state.cart.totalAmount);
  // const totalQuantity = useSelector(state=>state.totalQuantity);
  
  return (
    <Helmet title='Checkout' >
      <CommonSection title='Checkout' />

      <section>
        <Container >
          <Row>
            <Col lg='8'>
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="billing__form">
                <FormGroup >
                  <input type="text" placeholder="Enter your name" className="focus:outline-none form__group border-[1px] border-[#d6e5fb] p-[7px] rounded-[5px] w-full"  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input className="form__group border-[1px] border-[#d6e5fb] p-[7px] focus:outline-none  rounded-[5px] w-full" type="email" placeholder="Enter your email"  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="number" placeholder="Phone Number" className="form__group border-[1px] focus:outline-none  border-[#d6e5fb] p-[7px] rounded-[5px] w-full" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input className="form__group border-[1px] border-[#d6e5fb] p-[7px] rounded-[5px] focus:outline-none  w-full" type="text" placeholder="Street Address"  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="City"  className="form__group border-[1px] border-[#d6e5fb] p-[7px] focus:outline-none  rounded-[5px] w-full"/>
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Postal Code"  className="form__group border-[1px] border-[#d6e5fb] p-[7px] rounded-[5px] focus:outline-none  w-full"/>
                </FormGroup>
                <FormGroup className="form__group">
                  <input className="form__group focus:outline-none  border-[1px] border-[#d6e5fb] p-[7px] rounded-[5px] w-full" type="text" placeholder="Country"  />
                </FormGroup>
              </Form>
            </Col>

            <Col lg='4'  className="!bg-primary space-y-7 h-[330px] py-[40px] rounded-[10px]">
              <div className="checkout__cart text-[white]">
                <h6 className="text-[white] justify-between flex mb-3">Total Qty : <span>{totalQuantity || 0}</span></h6>
                <h6 className="text-[white] justify-between flex mb-3">SubTotal : <span>${totalAmount || 0}</span></h6>
                <h6 className="text-[white] justify-between flex mb-3">Shipping : <span>$0</span></h6>
                <h6 className="text-[white] justify-between flex mb-3 !text-[.8rem]">Free Shipping</h6>
                <h4 className="text-[white] justify-between flex mb-3 border-b-[1px] border-[gray] !pb-[20px]">Total Cost: <span>${totalAmount ||  0}</span></h4>
              </div>
              <button className="w-full !text-primary font-[600] bg-[white] rounded-[5px] py-[4px]">Place an Order</button>
            </Col>

          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default CheckoutPage;