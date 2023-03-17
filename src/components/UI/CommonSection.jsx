

import { Container } from 'reactstrap'

function CommonSection({title}) {
  return (
    <section className='common__section flex items-center justify-center'>
        <Container className='text-center '>
            <h1 className='text-white font-semibold !text-[1.3rem]'>{title}</h1>
        </Container>
    </section>
  )
}

export default CommonSection