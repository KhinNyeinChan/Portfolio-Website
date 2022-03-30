import React from 'react'
import Product from '../product/Product'
import './productlist.css'
import {products} from '../../data'

const ProductList = () => {
  return (
    <div className='pl'>
        <div className="pl-texts">
            <h1 className="pl-title">Create & inspire</h1>
            <p className="pl-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
        </div>
        <div className="pl-list">
            {
                products.map((p) => (
                    <Product key={p.id} img={p.img} link={p.link} />  
                ))
            }
        </div>
    </div>
  )
}

export default ProductList