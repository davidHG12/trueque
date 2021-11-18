import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../../firebase";
// import storage from '../../firebase'

import "./links.css";

const LinkForm = ({ addArticle, categorie,university  }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(false)
  const [data, setData] = useState({
    nameArticle: "",
    price: "",
    nameCategorie: "",
    imagen: "",
    email: "",
    phone: "",
    nameUniversity: "",
  });
  const { nameArticle, price, nameCategorie, email, phone, nameUniversity, articleDescrip,imagen } = data;

  // Guardando data en el State
  const handelChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // Enviar Data
  const onSubmit = (e) => {
    e.preventDefault();

    // Valida que los campos no esten vacios
    if(nameArticle.trim() === '' || price.trim() === '' || nameCategorie.trim() === '' || imagen.trim() === '' || email.trim() === '' || phone.trim() === '' || nameUniversity.trim === ''){
      setError(true)
      return
  }
  setError(false)

    addArticle(data);

    // Setear los inputs
    setData({
      nameArticle: "",
      price: "",
      nameCategorie: "",
      email: "",
      phone: "",
      nameUniversity: "",
      articleDescrip: "",
    });



    navigate("/inicio");
  };

  // Guardar img en el storage
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const filePath = storageRef.child(file.name);
    await filePath.put(file);
    const urlImg = await filePath.getDownloadURL();
    setData({
      ...data,
      imagen: urlImg,
    });
  };


  return (
    <div className="form d-flex flex-column">
      <form action="">
        <div className="col">
          <label className="form-label">Nombre del Articulo</label>
          <input
            type="text"
            name="nameArticle"
            className="form-control"
            onChange={handelChange}
            value={nameArticle}
            required
          />
        </div>
        <div className="col mt-3">
          <label className="form-label">Imagen del Articulo</label>
          <input
            id="imagen"
            type="file"
            name="imagen"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="col mt-3">
          <label className="form-label">Precio del Articulo</label>
          <input
            type="number"
            className="form-control"
            name="price"
            onChange={handelChange}
            value={price}
            required
          />
        </div>

        <div className="col mt-3">
          <label className="form-label">Descripción del Articulo</label>
          <textarea
            type="test"
            className="form-control"
            name="articleDescrip"
            onChange={handelChange}
            value={articleDescrip}
            required
          />
        </div>


        <div className="col">
          <label className="form-label">Correo</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={handelChange}
            value={email}
            required
          />
        </div>
        <div className="col">
          <label className="form-label">Numero de telefono</label>
          <input
            type="number"
            name="phone"
            className="form-control"
            onChange={handelChange}
            value={phone}
            required
          />
        </div>


        <div className="col mt-3">
          <select
            name="nameCategorie"
            className="form-select"
            onChange={handelChange}
            value={nameCategorie}
            required
          >
            <option value="Selecciona una Categoria">Selecciona una Categoria</option>
            {categorie.map((item) => (
              <option key={item.id} value={item.nombre}>
                {item.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="col mt-3">
          <select
            name="nameUniversity"
            className="form-select"
            onChange={handelChange}
            value={nameUniversity}
            required
          >
            <option value="selecciona una Universidad">Selecciona una Universidad</option>
            {university.map((item) => (
              <option key={item.id} value={item.nombre} >
                {item.nombre}
              </option>
            ))}
          </select>
        </div>
            {
                error ? <p className="mt-4 p-2 error text-center text-danger">Todos los campos son obligatorios</p>  : null
            }
        <button
          type="submit"
          onClick={onSubmit}
          className="btn btn-success bnt-add mt-3"
        >
          Agregar
        </button>
      </form>
    </div>
  );
};

export default LinkForm;
