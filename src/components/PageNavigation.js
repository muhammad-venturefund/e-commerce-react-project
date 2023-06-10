import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link  } from "react-router-dom";

const PageNavigation = ({title}) => {
  return (
    <Breadcrumb>
      <Link to="/" className='me-2'>Home</Link>/
      <Breadcrumb.Item active className='text-capitalize ms-2'>{title}</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default PageNavigation