

import { Container } from 'reactstrap'

function CommonSection({title}) {
  return (
    <section className='common__section flex items-center justify-center tablet:py-[70px] tablet:px-[0px]'>
        <Container className='text-center '>
            <h1 className='text-white font-semibold !text-[1.3rem] tablet:!text-[1.4rem]'>{title}</h1>
        </Container>
    </section>
  )
}

export default CommonSection