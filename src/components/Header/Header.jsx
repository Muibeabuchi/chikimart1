import { NavLink,useNavigate } from 'react-router-dom';
import { Container ,Row , Col} from 'reactstrap';

import {useRef} from 'react';

import { motion } from 'framer-motion';

import Logo from '../../assets/images/chiki-logo-dark.png';
import userIcon from '../../assets/images/user-icon.png';

import { useSelector } from 'react-redux';

import useAuth from '../../custom-hooks/useAuth';

function Header() {

  const totalQuantity = useSelector((state)=> state.cart.totalQuantity);
  const navigate = useNavigate();
  const {currentUser} = useAuth();

  const navigateToCart = () =>{
    navigate('/cart');
  }

  const navLink =[
    {
      path:'home',
      display:'Home'
    },
    {
      path:'shop',
      display:'Shop'
    },
    {
      path:'cart',
      display:'Cart'
    },
  ]

  // const headerRef = useRef(null);
  // const stickyHeader = () =>{
  //   window.addEventListener('scroll',()=>{
  //     // console.log('scrolled');
  //     if(document.body.scrollTo>80 || document.documentElement.scrollTo>80){
  //       headerRef.current.classList.add('sticky__header');
  //     }else{
  //       headerRef.current.classList.remove('sticky__header');        
  //     }
  //   })
  // }

  // useEffect(()=>{
  //   stickyHeader()

  //   return ()=>window.removeEventListener('scroll',stickyHeader)
  // },[])

  const menuRef = useRef(null);

  const toggleMenu =()=> menuRef.current.classList.toggle('!block')

  // todo: Add box-shadow to my header

  return <header className='w-full h-[4.375rem] leading-[4.375rem] shadow-[3px_3px_8px_-3px_#d6e5fb] z-[999999999] sticky top-0 left-0 bg-white  '>
    <Container >
      <Row>
        <div className="nav__wrapper flex  justify-between items-center ">

          <div className="logo flex items-center gap-x-2">
            <img src={Logo} alt="header-logo" className='w-[70px] h-[70px] tablet:w-8 tablet:h-8 ' />
            <div className="flex flex-column justify-center items-center">
              <h1 className='font-bold !text-[1.2rem] !text-primary m-0 tablet:!text-[1rem]'>Chikimart</h1>
              {/* <p className='text-stc m-0 p-0 block text-[.6rem]'>since 1995</p> */}
            </div>
          </div>

          <div ref={menuRef} className="navigation flex items-center" >
            <ul  className="menu flex items-center gap-x-[2.7rem] mb-0" >
              {
                navLink.map((link,index)=><li key={index} className="nav__item ">
                <NavLink onClick={toggleMenu} className={`link !text-primary font-medium cursor-pointer `} to={link.path}>{link.display}</NavLink>
              </li>
)
              }
            </ul>
          </div>

          <div className="nav__icons flex gap-x-5 items-center -mb-[0.6rem] ">
            <span className='relative' onClick={navigateToCart}>
              <i className="ri-shopping-bag-line text-[1.4rem] cursor-pointer tablet:text-[1.2rem]"></i>
              <span className="badge z-[10] absolute !bg-primary !rounded-full top-[20%] -right-[5px] !text-[9px] text-white ">{totalQuantity}</span>
            </span>
            <span className='relative'>
              <i className="ri-heart-line text-[1.4rem] cursor-pointer tablet:text-[1.2rem]"></i>
              <span className="badge z-[10] absolute !bg-primary !rounded-full top-[20%] -right-[5px] !text-[9px] text-white">3</span>
            </span>

            <span><motion.img whileTap={{scale:1.2}} src={currentUser ? currentUser.photoUrl: userIcon} alt="user-icon" className='w-6 h-6 -mt-[10px] cursor-pointer tablet:!width-[1.4rem] tablet:!height-[1.4rem]' /></span>
            <div onClick={toggleMenu} className="mobile__menu text-xl !text-primary hidden cursor-pointer">
              <span><i className="ri-menu-line text-[2rem] tablet:text-[1.5rem]"></i></span>
            </div>

          </div>


        </div>
      </Row>
    </Container>
  </header>
}

export default Header