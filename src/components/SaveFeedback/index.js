import React from 'react'
import { GiCheckMark } from 'react-icons/gi'

const SaveFeedback = () => {
  return (
    <div className="wrapper">
      <div className="flex-center feedback-container">
        <p className="feedback flex-center">
          <GiCheckMark className="mr-4 " />Senha salva com sucesso.
        </p>
      </div>
    </div>
  )
}

export default SaveFeedback