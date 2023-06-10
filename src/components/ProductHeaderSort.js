import React from 'react'
import { Button } from "react-bootstrap";
import { MdDashboard, MdList } from "react-icons/md";
import Form from 'react-bootstrap/Form';
import { useFilterContext } from "../context/filterContext";

const ProductHeaderSort = () => {
  const {gridViewHandler } = useFilterContext();
  return (
    <div className='product-header-sort d-flex justify-content-between align-items-center mb-4'>
      <div className='product-header-option'>
      <Button variant="light" className='product-btn me-2' onClick={gridViewHandler}><MdDashboard /></Button>
      <Button variant="light" className='product-btn' onClick={gridViewHandler}><MdList /></Button>
      </div>
      <div className='product-count'>
        <h6>total products</h6>
      </div>

      <div className='product-count'>
      <Form.Select aria-label="Default select example" >
      <option value="1">Ascending order</option>
      <option value="2">Decending order</option>
    </Form.Select>
      </div>
    </div>
  )
}

export default ProductHeaderSort