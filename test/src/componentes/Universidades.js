import React from 'react'
import "./universidadesStyle.css";

export default function Universidades() {
    return(
        <div id="form-main" href="universidadesStyle.css">
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

