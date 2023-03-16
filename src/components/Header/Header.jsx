import { NavLink, useLinkClickHandler } from 'react-router-dom';
import { Container ,Row , Col} from 'reactstrap';

import { motion } from 'framer-motion';

import Logo from '../../assets/images/logo-chris.png';
import userIcon from '../../assets/images/user-icon.png';

function Header() {

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

  return <header className='w-full h-[4.375rem] leading-[4.375rem]'>
    <Container >
      <Row>
        <div className="nav__wrapper flex  justify-between items-center">

          <div className="logo flex items-center gap-x-2">
            <img src={Logo} alt="header-logo" className='w-9 h-9 ' />
            <div className="flex flex-column justify-center items-center">
              <h1 className='font-bold !text-[1.2rem] !text-primary m-0'>Chikimart</h1>
              {/* <p className='text-stc m-0 p-0 block text-[.6rem]'>since 1995</p> */}
            </div>
          </div>

          <div className="navigation flex items-center">
            <ul className="menu flex items-center gap-x-[2.7rem] mb-0">
              {
                navLink.map((link,index)=><li key={index} className="nav__item ">
                <NavLink className={`link !text-primary font-medium cursor-pointer `} to={link.path}>{link.display}</NavLink>
              </li>
)
              }
            </ul>
          </div>

          <div className="nav__icons flex gap-x-5 items-center -mb-[0.6rem] ">
            <span className='relative'>
              <i className="ri-shopping-bag-line text-[1.4rem] cursor-pointer "></i>
              <span className="badge z-[10] absolute !bg-primary !rounded-full top-[20%] -right-[5px] !text-[9px] text-white ">3</span>
            </span>
            <span className='relative'>
              <i className="ri-heart-line text-[1.4rem] cursor-pointer "></i>
              <span className="badge z-[10] absolute !bg-primary !rounded-full top-[20%] -right-[5px] !text-[9px] text-white">3</span>
            </span>

            <span><motion.img whileTap={{scale:1.2}} src={userIcon} alt="user-icon" className='w-6 h-6 -mt-[10px] cursor-pointer' /></span>
          </div>

          <div className="mobile__menu text-xl !text-primary hidden cursor-pointer">
            <span><i className="ri-menu-line"></i></span>
          </div>

        </div>
      </Row>
    </Container>
  </header>
}

export default Header