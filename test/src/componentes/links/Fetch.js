import React, { useEffect, useState } from "react";
import LinkForm from "./LinkForm";
import { db } from "../../firebase";

const Fetch = () => {
//   const [article, setArticle] = useState([]);
  const [categorie, setCateogorie] = useState([]);
  const [university, setUniversity] = useState([]);


  // Guardar el articulo en firestore
  const addArticle = async (data) => {
    await db.collection("article").doc().set(data);
    console.log("Articulo agregado", data);
  };


  // Obtener la categoria
  const getCategorie = () => {
    const docs = [];
    db.collection("categories").onSnapshot((querySnpashot) => {
      querySnpashot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setCateogorie(docs);
    });
  };

  const getUniversity = () => {
    const docs = [];
    db.collection("university").onSnapshot((querySnpashot) => {
      querySnpashot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setUniversity(docs);
    });
  };


  useEffect(() => {
    getCategorie();
    getUniversity();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="section__form d-flex justify-content-center align-items-center">
      <LinkForm addArticle={addArticle} categorie={categorie} university={university} />
    </div>
  );
};

export default Fetch;
