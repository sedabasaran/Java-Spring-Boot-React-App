import React from 'react'
import Categoires from './Categoires'
import ProductList from '../pages/ProductList'
import { GridRow, GridColumn, Grid } from 'semantic-ui-react'
import { Routes, Route } from 'react-router-dom';
import ProductDetail from '../pages/ProductDetail';
import CartDetail from '../pages/CartDetail';
import { ToastContainer } from 'react-toastify';
import ProductAdd from '../pages/ProductAdd';

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position='bottom-right' />
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Categoires />
          </GridColumn>
          <GridColumn width={12}>
            <Routes>
              <Route exact path='/' element={<ProductList />}> </Route>
              <Route exact path='/products' element={<ProductList />}></Route>
              <Route path='/products/:name' element={<ProductDetail />}></Route>
              <Route path='/cart' element={<CartDetail />}></Route>
              <Route path='/product/add' element={<ProductAdd />}></Route>
            </Routes>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  )
}
