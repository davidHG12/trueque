import React from "react";
import "./ArticleDescrip.css";

const ArticleDescrip = ({ info }) => {
  const { nameArticle, imagen, email, phone, articleDescrip } = info;

  return (
    <div className="article d-flex justify-content-around flex-wrap">
      <div className="article__img">
        <img src={imagen} alt="" width="600px" />
      </div>
      <div className="article__descrip">
        <h2 className="mb-3 d-block">{nameArticle}</h2>
        <hr />

        <p>
        {articleDescrip}
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
