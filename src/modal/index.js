import CSSModules from 'react-css-modules'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import css from './index.css'

const { bool, func } = PropTypes

class Modal extends Component {
 static propTypes = {
   isOpen: bool.isRequired,
   toggleModal: func.isRequired
 }

 toggleModal = () => {
  console.log('state before', this.state)
  this.setState({ isModalOpen: !this.state.isModalOpen })
  console.log('here i am', this.state)
}

 render() {

  //  if (!this.props.isOpen)
  //    return null

   return (
     <div className="body">
      <button onClick={this.props.toggleModal}>Close Modal</button>
       <main id="Modal">
         <div className="modal-content">
          <span className="closeBtn">&times;</span>
          <p>Hi I am the Modal</p>
         </div>
       </main>
     </div>
   )
 }
}

export default CSSModules (Modal, css)
