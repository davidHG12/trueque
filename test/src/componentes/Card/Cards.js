// import React from "react";
// import Card from "./Card";

// import image1 from "./assets/image1.jpg";
// import image2 from './assets/image2.jpg'
// import image3 from './assets/image3.jpg'

// const cards = [
//   {
//     id: 1,
//     title: "Articulo",
//     image: image1,
//     url: "",
//   },
//   {
//     id: 2,
//     title: "Articulo",
//     image: image2,
//     url: "",
//   },
//   {
//     id: 3,
//     title: "Articulo",
//     image: image3,
//     url: "",
//   },
//   {
//     id: 4,
//     title: "Title on deck",
//     image: image1,
//     url: "",
//   },
//   {
//     id: 5,
//     title: "Articulo",
//     image: image2,
//     url: "",
//   },
//   {
//     id: 6,
//     title: "Articulo",
//     image: image3,
//     url: "",
//   }
// ];

// function Cards() {
//   return (
//     <div className="container-fluid d-flex justify-content-center align-items-center h-200">
//       <div className="row">
//         {cards.map(({ title, image, url, id }) => (
//           <div className="col-md-4" key={id}>
//             <Card imageSource={image} title={title} url={url} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Cards;

import React from 'react'
import { Link } from "react-router-dom";
import './card.css'

const Cards = ({item, setInfo}) => {
      const {nameArticle, price,  imagen} = item
  return (
    <div className='card text-center animate__animated animate__fadeInUp'>
      <div className="overflow">
        <Link to={`/article/${item?.id}`}>
          <img src={imagen} alt="a wallpaper" onClick={() => setInfo(item)} className="card-img-top" style={{ width: "400px" }}/>
          </Link>
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{nameArticle}</h4>
        <p className="card-text text-secondary">
          {nameArticle
            ? price
            : nameArticle}
        </p>
            <Link to={`/article/${item?.id}`}
            className="btn btn-outline-secondary border-0"
            onClick={() => setInfo(item)}
            >Ver mas
            </Link>
      </div>
      {/* <div className="card-body d-flex justify-content-between align-items-center">
        <h3 className='m-0'>{nameArticle}</h3>
        <p className='m-0'>${price}</p>
      </div>
      <div className="card-footer">
        <h3 className='text-center'>Ver mas</h3>
      </div> */}
    </div>
  )
}

export default Cards

