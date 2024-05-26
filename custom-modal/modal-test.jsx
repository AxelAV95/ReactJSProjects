
import React, { useState } from 'react'
import Modal from './modal'

function ModalTest() {
    const [showModalPopup, setShowModalPopup] = useState(false)

  const handleToggleModalPopup = () =>{
    setShowModalPopup(!showModalPopup)
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open modal popup</button>
      {
        showModalPopup && <Modal onClose={onClose}/>
      }
    </div>
  )
}

export default ModalTest
