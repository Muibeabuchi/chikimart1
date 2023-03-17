import { Col } from "reactstrap"
import { motion } from "framer-motion";

function ServiceCard({bg,icon,title,subtitle,}) {
    // console.log(bg);
  return (
    <Col lg='3' md='4' sm='6' >
        <motion.div whileHover={{scale:1.1}} className={`service__item tablet:!mb-[.8rem] mb-3  cursor-pointer laptop:p-[10px] p-[20px] !bg-[#d6e5fb] flex items-center gap-x-[0.7rem] rounded-[5px]`}>
            <span><i className={` ${icon} font-[400] text-[2.2rem] tablet:!text-[1.5rem] laptop:!text-[1.8rem] !bg-primary laptop:p-[5px] p-[10px] text-white rounded-[50px]`}></i></span>
            <div>
                <h3 className='text-base laptop:text-[.8rem] !text-primary font-semibold'>{title}</h3>
                <p className='text-[.9rem] laptop:text-[.7rem] text-[#222] !tablet:mt-[5px] !mt-[10px]'>{subtitle}</p>
            </div>
        </motion.div>
    </Col>

  )
}

export default ServiceCard