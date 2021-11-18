import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './Formulario';
import ListadoNoticias from './ListadoNoticias';

function PaginaNoticias() {

    // definir la categoria y noticias
    const [categoria, guardarCategoria] = useState('');
    const [noticias, guardarNoticias] = useState([]);
  
    useEffect(() => {
      const consultarAPI = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=3cdeded0619b4be6a22a9b621faf9a6c`;
  
        const respuesta = await fetch(url);
        const noticias = await respuesta.json();
  
        guardarNoticias(noticias.articles);
      }
      consultarAPI();
    }, [categoria]);
  
    return (
      <Fragment>
          <div className="container white">
              <Formulario 
                guardarCategoria={guardarCategoria}
              />
          </div>
          <div className="container white">
              <ListadoNoticias 
                noticias={noticias}
              />
           </div>
         
      </Fragment>
    );
  }

export default PaginaNoticias