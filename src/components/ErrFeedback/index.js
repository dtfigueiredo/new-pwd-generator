import React from 'react'
import { GiCheckMark } from 'react-icons/gi'

const ErrorFeedback = () => {
  return (
    <div className="wrapper">
      <div className="flex-center feedback-container">
        <p className="feedback flex-center">
          <GiCheckMark className="mr-4 " />Digite um título para sua senha.
        </p>
      </div>
    </div>
  )
}

export default ErrorFeedback