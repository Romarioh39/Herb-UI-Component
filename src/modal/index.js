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
     <div>
       <div>
         Hi I am the Modal
         <button onClick={this.props.toggleModal}>
          Close Modal
         </button>
       </div>
     </div>
   )
 }
}

export default CSSModules (Modal, css)
