// import CSSModules from 'react-css-modules'
import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import css from './index.css'

window.onload=function(){
  document.getElementById('button').addEventListener('click',
  function() {
    document.querySelector('.herb-modal').style.display = 'flex';
  });

  document.querySelector('.close').addEventListener('click',
    function() {
      document.querySelector('.herb-modal').style.display = 'none';
  });
}

class Modal extends Component {
 render() {
   return (
     <main>
      <section class="container">
       <img src="3.jpg" alt="" />
        <div class="text-content">
          <h1>Let's create a modal</h1>
          <h3>Sign Up Now</h3>
          <a href="#" id="button" class="button">Click Me</a>
        </div>
      </section>
      <div className="herb-modal">
        <div className="modal-content">
        <div class="close">+</div>
        <img src="favicon.ico" alt="l" />
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="E-mail"/>
          <a href="" class="button">Submit</a>
        </form>
        </div>
      </div>
     </main>
   )
 }
}

export default Modal
