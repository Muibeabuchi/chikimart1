import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import {Container,Col,Row} from 'reactstrap';
import { useState } from "react";
import products from '../assets/data/products';
import ProductsList from "../components/UI/ProductsList";

function ShopPage() {

  // const [searchText,setSearchText] = useState('');
  const [productsData,setProductsData] = useState(products);

  const handleFilter = (e) =>{
    const filterValue = e.target.value;
    // console.log(filterValue);

    switch(filterValue){
      case 'sofa':
        const sofaData = products.filter((item)=>item.category == filterValue);
        setProductsData(sofaData);
        break;      
      case 'watch':
        const watchData = products.filter((item)=>item.category == filterValue);
        setProductsData(watchData);
        break;      
      case 'chair':
        const chairData = products.filter((item)=>item.category == filterValue);
        setProductsData(chairData);
        break;      
      case 'mobile':
        const mobileData = products.filter((item)=>item.category == filterValue);
        setProductsData(mobileData);
        break;      
      case 'wireless':
        const wirelessData = products.filter((item)=>item.category == filterValue);
        setProductsData(wirelessData);
        break;      
        default:
          setProductsData([])
    }
  }

  const handleSearch = e =>{
    const searchText = e.target.value;
    const searchedProducts = products.filter((item)=> item.productName.toLowerCase().includes(searchText));
    setProductsData(searchedProducts);
  }
  return (
    <Helmet title='shop'>
      <CommonSection title='products' />
      

      <section>
        <Container>
          <Row>
            <Col lg='3' md='3' >
              <div className="filter__widget">
                <select  className="py-[10px] px-[20px] border-[1px] border-solid !border-primary cursor-pointer rounded-[5px] text-white hover:outline-none !bg-primary" onChange={handleFilter}>
                  <option className="text-[.9rem]">Filter By Category</option>
                  <option value="sofa" className="text-[.9rem]">Sofa</option>
                  <option value="mobile" className="text-[.9rem]">Mobile</option>
                  <option value="chair" className="text-[.9rem]">Chair</option>
                  <option value="watch" className="text-[.9rem]">Watch</option>
                  <option value="wireless" className="text-[.9rem]">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='3' >
            <select className="py-[10px] px-[20px] rounded-[5px] text-white hover:outline-none !bg-primary border-[1px] border-solid !border-primary cursor-pointer" >
                  <option >Sort By</option>
                  <option value="ascending" className="text-[.9rem]">Ascending</option>
                  <option value="descending" className="text-[.9rem]">Descending</option>
                </select>
            </Col>
            <Col lg='6' md='6' >
              <div className="search__box w-full flex items-center justify-between border-[1px] rounded-[5px] pr-[12px] pl-[2px] !border-primary border-solid">
                <input type="text" placeholder="Search..."  onChange={handleSearch} className="w-full border-none outline-none py-[8px] px-[10px]" />
                <span className="!text-primary"><i className="ri-search-line"></i></span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            {
              productsData.length === 0 ? <h1>No items were found! </h1> : <ProductsList data={productsData} />
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default ShopPage