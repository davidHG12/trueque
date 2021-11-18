import React from 'react'
import "./universidadesStyle.css";

export default function Universidades() {
    return(
        <div id="form-main" href="universidadesStyle.css">
          <ul class="flex-container">
  <li class="flex-item">
    <h1 class="u">Universidad de la Sabana</h1>
    <h1 class="user">Usuario</h1>
    <p class="commentPost">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  </li>
</ul>
        <div id="form-div">

          <form class="form" id="form1">

          
            
            <p class="text">
              <textarea name="text" class="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Comentario"></textarea>
            </p>
            
            
            <div class="submit">
              <input type="submit" value="Enviar" id="button-blue"/>
              <div class="ease"></div>
            </div>
          </form>
        </div>
        </div>
    )

}

