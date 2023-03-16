// import { Col } from "reactstrap"
import ProductCard from "./ProductCard"


function ProductsList({data}) {

  return (
    <>

        {
            data?.map((item)=> <ProductCard key={item.id} {...item}/> )
        }
        {/* 
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}
    </>
  )
}

export default ProductsList