import {Container,Row, Col} from 'reactstrap';
import serviceData from '../assets/data/serviceData';
import ServiceCard from '../components/UI/ServiceCard';


function Services() {
  return (
    <section className='services'>
        <Container>
            <Row>
                {
                    serviceData.map(data=>{
                        // const {icon,subtitle,title,bg} = data;
                        // console.log(data);
                        return <ServiceCard key={data.bg} {...data}/>      
                    })
                }

            </Row>
        </Container>
    </section>
  )
}

export default Services;