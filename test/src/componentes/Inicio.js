import React, {useState, useEffect} from "react";
import Cards from "./Card/Cards";
import Filters from "./Filter/Filters";
import "./app.css";
import AddArticle from "./links/AddArticle";
import {db} from '../firebase'

export default function Inicio({setInfo, loading, login}) {

  const [article, setArticle] = useState([]);


  // Obtener Articulos
  const getArticle = () => {
    db.collection("article").onSnapshot((querySnpashot) => {
      const docs = [];
      querySnpashot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setArticle(docs);
    });
  };

  useEffect(() => {
    getArticle();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="container">
        <div className="container-filters">
          <Filters />
        </div>
        <div className="container-cards d-flex flex-wrap">
            {
                article.map(item => (
                    <Cards key={item.id} item={item} setInfo={setInfo} />
                ))
            }
        </div>
      </div>
       {
        login ? <AddArticle /> : null
      } 
      
    </>
  );
}
