import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../../firebase";
// import storage from '../../firebase'

import "./links.css";

const LinkForm = ({ addArticle, categorie }) => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    nameArticle: "",
    price: "",
    nameCategorie: "",
    imagen: "",
    email: "",
    phone: "",
    University: "",
  });

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
    addArticle(data);

    // Setear los inputs
    setData({
      nameArticle: "",
      price: "",
      nameCategorie: "",
      email: "",
      phone: "",
      University: "",
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

  const { nameArticle, price, nameCategorie, email, phone, University } = data;

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
          />
        </div>
        <div className="col mt-3">
          <label className="form-label">Imagen del Articulo</label>
          <input
            id="imagen"
            type="file"
            name="imagen"
            onChange={handleFileChange}
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
          />
        </div>

        <div className="col mt-3">
          <select
            name="nameCategorie"
            className="form-select"
            onChange={handelChange}
            value={nameCategorie}
          >
            <option value="cc">Selecciona una Universidad</option>
            <option value="La Sabana">La Sabana</option>
          </select>
        </div>

        <div className="col mt-3">
          <select
            name="University"
            className="form-select"
            onChange={handelChange}
            value={University}
          >
            <option value="cc">Selecciona una categoria</option>
            {categorie.map((item) => (
              <option key={item.id} value={item.nombre}>
                {item.nombre}
              </option>
            ))}
          </select>
        </div>

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
