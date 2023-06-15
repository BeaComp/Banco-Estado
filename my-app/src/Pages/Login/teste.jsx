import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState([]);

  const getusuario = async () => {

    try {
        const response = await axios.get("http://localhost:8000/usuarios")
        const data = response.data
        console.log(data);
    } catch (error) {
        console.log(error);
    }

  }

  useEffect(() => {
    getusuario()
  },[])

  return (
    <div>
     {data}
    </div>
  );
};

export default MyComponent;
