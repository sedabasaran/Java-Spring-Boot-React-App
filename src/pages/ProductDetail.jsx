import React from 'react'
import { useParams } from 'react-router-dom'
import {
  CardHeader,
  CardDescription,
  CardMeta,
  CardContent,
  Button,
  Card,
  Image,
} from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import ProductService from '../services/productService'


export default function ProductDetail() {
  let { name } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    let productService = new ProductService()
    productService.getByProductName(name).then(result => setProduct(result.data.data), [])
  })

  //CardMeta>{product.category.categoryName}</CardMeta>

  return (
    <div>
      <Card fluid>
        <CardContent>
          <Image
           floated='right'
            size='mini'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Girl_with_a_Pearl_Earring.jpg/640px-Girl_with_a_Pearl_Earring.jpg'
          />
          <CardHeader> Product Name : {product.productName}</CardHeader>
          <CardMeta> {product.categoryName}</CardMeta>
          <CardDescription>
            Inci wants to buy {product.productName}. Shipping: FREE
          </CardDescription>
        </CardContent>
        <CardContent extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Add To Cart
            </Button>
            <Button basic color='red'>
              Remove
            </Button>
          </div>
        </CardContent>
      </Card>
    </div >
  )
}
