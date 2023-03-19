import {Container,Col,Row,Form,FormGroup} from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
// import CommonSection from '../components/UI/CommonSection';
import { Link,useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import {auth} from '../firebaseconfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {toast} from 'react-toastify';


function LoginPage() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  async function signIn(e){
    e.preventDefault();
    setLoading(true);
    if(!emailRef.current.value && !passwordRef.current.value) return;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
    try {
      await signInWithEmailAndPassword(auth,email,password);
      toast.success('Logged in successfully');
      setLoading(false);
      navigate('/checkout');
    } catch (error) {
      console.log(error.message);
      toast.error('something went wrong');
      setLoading(false);
    }

  }

  return (
    <Helmet title='Login'>
      {/* <CommonSection title='Login '/> */}

      <section className='tablet:!py-[20px]'>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center rounded-[5px] py-[2rem] !bg-primary'>
              <h3 className="fw-bold fs-4 text-[white] !mb-[9px]">Login</h3>
              <Form onSubmit={signIn}  className="auth__form">
                <FormGroup className=''>
                  <input type="text" required placeholder='email' ref={emailRef} className='focus:outline-none py-[3px] px-[7px] rounded-[3px] small:w-[90%] w-[70%]'/>
                </FormGroup>
                <FormGroup>
                  <input type="password" required ref={passwordRef} placeholder='password' className='py-[3px] focus:outline-none px-[7px] rounded-[3px] small:w-[90%] w-[70%]' />
                </FormGroup>
                <motion.button whileTap={{scale:1.1}} className='rounded-[5px] cursor-pointer mb-[8px] text-[.8rem] !text-[#999] font-medium bg-white py-[5px] px-[18px]'>Login</motion.button>
                <p>Don't have an account? <Link to='/signup' className='link'>Sign Up</Link></p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default LoginPage