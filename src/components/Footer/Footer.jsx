import { Link } from "react-router-dom"
import { Container,Col, Row, ListGroup, ListGroupItem } from "reactstrap"

function Footer() {

  const year = new Date().getFullYear();
  return (
    <footer className="footer !bg-primary pt-[60px] pb-[30px]">
      <Container>
        <Row>
          <Col lg='4' md='4' className="mb-4" >
            <div className="footer__info">
              <h1 className="font-bold !text-[1.2rem] !text-primary m-0 text-white">Chikimart</h1>
              <p className="mt-3 text-[.8rem] leading-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis optio vel, qui ratione repudiandae molestias ipsa deleniti cupiditate quasi vero.</p>
            </div>
          </Col>
          <Col lg='3'md='4'className="mb-4">
            <div className="footer__quick-links">
              <h1 className="font-bold !text-[1.2rem] !text-primary m-0 text-white">Quick Links</h1>
              <ListGroup className="border-0 mt-3" >
                <ListGroupItem className="!bg-primary ps-0 !border-0">
                  <Link to='#' className='link !text-[#999] '>Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className="!bg-primary ps-0 !border-0">
                  <Link to='#' className='link !text-[#999]'>Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className="!bg-primary ps-0 !border-0">
                  <Link to='#' className='link !text-[#999]'>Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className="!bg-primary ps-0 !border-0">
                  <Link to='#' className='link !text-[#999]'>Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2' md='4' className="mb-4">
            <div className="footer__useful-links">
              <h1 className="font-bold !text-[1rem] text-white m-0 ">Useful Links </h1>              
              <ListGroup className="border-0 mt-3" >
                <ListGroupItem className="!bg-primary ps-0 !border-0">
                  <Link to='/shop' className='link !text-[#999] !hover:text-'>Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="!bg-primary ps-0 !border-0">
                  <Link to='/cart' className='link !text-[#999]'>Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="!bg-primary ps-0 !border-0">
                  <Link to='/login' className='link !text-[#999]'>Login</Link>
                </ListGroupItem>
                <ListGroupItem className="!bg-primary ps-0 !border-0">
                  <Link to='#' className='link !text-[#999]'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
              
            </div>            
          </Col>
          <Col lg='3' md='4' className="mb-4">
            <h1 className="font-bold !text-[1rem] text-white m-0 ">Contact</h1>              
            <ListGroup className="border-0 mt-3" >
                <ListGroupItem className="!bg-primary ps-0 !border-0">
                  <Link to='/shop' className='link !text-[#999] flex items-center text-[.8rem]'><span className="text-[.8rem]">
                      <i className="ri-map-pin-line mr-2 block"></i></span>#6 prince onunho close-Portharcourt Nigeria
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="!bg-primary ps-0 !border-0 ">
                  <Link to='/cart' className='link !text-[#999] text-[.8rem] flex items-center'><span className="text-[.8rem]">
                  <i className="ri-phone-line mr-2 block"></i></span>+233-26-166-80-52
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="!bg-primary ps-0 !border-0 ">
                  <Link to='/login' className='link !text-[#999] text-[.8rem] flex items-center'><span className="text-[.8rem]">
                  <i className="ri-mail-line mr-2 block"></i></span>example123@gmail.com
                  </Link>
                </ListGroupItem>
              </ListGroup>            
          </Col>
          <Col lg='12'className="text-center mt-4">
            <p className="footer__copyright">Copyright {year} developed by NerdkidChiki. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer