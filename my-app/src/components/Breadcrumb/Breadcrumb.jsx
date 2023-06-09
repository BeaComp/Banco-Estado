import React from "react";
import './breadcrumb.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const BreadcrumbSistema = () => {
    return (
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
      );
}

export default BreadcrumbSistema;