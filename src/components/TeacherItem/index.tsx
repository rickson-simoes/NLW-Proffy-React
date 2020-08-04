import React from 'react';

import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars1.githubusercontent.com/u/37545464?s=460&u=89d123fda0fcc7f9a390a0c1015f3c002ecb181d&v=4" alt="foto do perfil do github de Rickson Simoes"/>

      <div>
        <strong>Rickson Simoes</strong>
        <span>Quimica</span>
      </div>
    </header>

    <p>
      Entusiasta das melhores techs de quimica avançada.
        <br/><br/>
      Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 780,00</strong>
      </p>

      <button type="button">
        <img src={whatsappIcon} alt="whatsapp icon"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  )
}

export default TeacherItem;