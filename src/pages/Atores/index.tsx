
import axios from 'axios';

import './atores.css'
import { useEffect, useState } from 'react';


export default function Atores() {

  const [atoresLista, setAtoresLista] = useState([])

  useEffect(() => { 
    const url = process.env.REACT_APP_BACKEND_URI;
    const promise = axios.get(`${url}`);
    promise.then(response => {
      console.log(response.data);
  });
  promise.catch(e => {
      alert("deu rum");
  })
  }, [])



  return (
    <div>index</div>
  )
}

