import React from "react";
import "./ArticleDescrip.css";

const ArticleDescrip = ({ info }) => {
  const { nameArticle, imagen, email, phone } = info;

  return (
    <div className="article d-flex justify-content-around flex-wrap">
      <div className="article__img">
        <img src={imagen} alt="" width="600px" />
      </div>
      <div className="article__descrip">
        <h2 className="mb-3 d-block">{nameArticle}</h2>
        <hr />

        <p>
          Una calculadora es un dispositivo que se utiliza para realizar
          cálculos aritméticos. Aunque las calculadoras modernas incorporan a
          menudo un ordenador de propósito general, se diseñan para realizar
          ciertas operaciones más que para ser flexibles. Por ejemplo, existen
          calculadoras gráficas especializadas en campos matemáticos gráficos
          como la trigonometría y la estadística. También suelen ser más
          portátiles que la mayoría de los computadores, si bien algunas PDAs
          tienen tamaños similares a los modelos típicos de calculadora.
        </p>

        <h3 className="d-block">Info de contacto</h3>
        <hr />
            <span className="info-contact d-block">Email: {email}</span>
            <span className="info-contact d-block">Telefono: {phone}</span>
      </div>
    </div>
  );
};

export default ArticleDescrip;
