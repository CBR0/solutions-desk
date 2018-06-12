import React from 'react';


export default class AbrirChamado extends React.Component{
  render(){
    return(

        <div className="content">
          <div className="sub-menu">
            <div>
              <button className="botao-adicionar-chamado">
                <i className="material-icons">add</i>
                NOVO CHAMADO
              </button>
            </div>
          </div>
          <div>
            Abrir chamado!!!
          </div>
        </div>
    );
  }
}
