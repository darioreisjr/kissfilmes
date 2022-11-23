
import axios from 'axios';

import './cardAtores.css'

import { useEffect, useState } from 'react';


export default function CardAtores() {

  const [atoresLista, setAtoresLista] = useState([])

  useEffect(() => {
    const promise = axios.get('https://kissfilmes-api.vercel.app/atores');
    promise.then(response => {
      setAtoresLista(response.data);
    }).catch((e) => {
      console.log('deu ruim')
    })

  }, [])

  return (
    <>
      <div className='container-box'>
         {
        atoresLista.map((ator: any) => (
          <section className='container-atores'>
            <div className='card-atores'>
              <img src={ator.foto} />
              <h2>{ator.nome}</h2>
            </div>
          </section>
        ))
      }
      </div>
    
    </>
  )
}

