import React,{useState} from "react";
import "./shop.css";
import { catgeory } from "../../Category";
import { dummydata } from "../../dummydata";
import { FaShopify } from "react-icons/fa";
import Product from "../../components/Product/Product";

function shop() {
     let [cate, setCate] = useState(dummydata);
    
      function filterProducts(category) {
        if(category==="All"){
            setCate(dummydata);
        }else{
       const updatedata = dummydata.filter((item) => item.category === category);
        setCate(updatedata);
        }
      }
    
  return (
    <div className="shop">
        <div className="heading">
            <span>Shop</span>
            <FaShopify/>
        </div>
      <div className="category-section">
        {catgeory.map((item) => (
          <div
            className="category-card"
            onClick={() => {
              filterProducts(item.name);
            }}
          >
            <img src={item.image} alt="" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <div className="product-section">
        {cate.map((item) => (
          <Product key={item.name}
          name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  );
}

export default shop;
