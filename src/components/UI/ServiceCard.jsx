import { Col } from "reactstrap"
import { motion } from "framer-motion";

function ServiceCard({bg,icon,title,subtitle,}) {
    console.log(bg);
  return (
    <Col lg='3' md='4' sm='6' >
        <motion.div whileHover={{scale:1.1}} className={`service__item mb-3 cursor-pointer p-[20px] bg-${bg} flex items-center gap-x-[0.7rem] rounded-[5px]`}>
            <span><i className={` ${icon} font-[400] text-[2.2rem] !bg-primary p-[10px] text-white rounded-[50px]`}></i></span>
            <div>
                <h3 className='text-base !text-primary font-semibold'>{title}</h3>
                <p className='text-[.9rem] text-[#222] !mt-[10px]'>{subtitle}</p>
            </div>
        </motion.div>
    </Col>

  )
}

export default ServiceCard