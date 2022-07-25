import React from 'react'
import './productList.css'
import Product from '../product/Product'
import {products} from '../../data'

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title"> React Project's</h1>
        <p className="pl-desc">
          I'm creating many Web design's by using React js and some other languages.
          I was actually in this field since 2018 and achieve many goals during this journey.Here are some projects related to my passion
        </p>
      </div>
      <div className='pl-list'>
        {
          products.map(item=>(
        <Product key={item.id}
        img={item.imageUrl}
        link={item.link}
        />
        ))
        }
      </div>
      </div>
  )
}

export default ProductList