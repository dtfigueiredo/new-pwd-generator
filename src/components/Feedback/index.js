import React from 'react'
import { GiCheckMark } from 'react-icons/gi'

const Feedback = () => {
  return (
    <div className="wrapper">
      <div className="flex-center feedback-container">
        <p className="feedback flex-center">
          <GiCheckMark className="mr-4 " />Senha copiada com sucesso.
        </p>
      </div>
    </div>
  )
}

export default Feedback