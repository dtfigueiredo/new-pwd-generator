import React from 'react'
import Btn from '../Button'

const MainContent = (props) => {

  return (
    <main className="wrapper">

      <div className="flex-center flex-col">

        <h1
          className="mt-4 mb-8 text-center font-headings font-bold text-white text-xl sm:text-3xl">
          Strong Password Generator
        </h1>

        <p
          className="text-center font-body text-slate-200 text-base sm:text-lg">
          Sua senha tem <span className="font-bold underline">{props.pwdSize}</span> caracteres.
        </p>

        {/* //*Input range */}
        < input
          className="input-pwd"
          type="range"
          min="10"
          max="30"
          value={props.pwdSize}
          onChange={props.handlePwdSize} />

        {/* //*Checkbox */}
        <div className="flex-center my-4 mx-auto">
          <input
            className="checkbox"
            type="checkbox"
            name="symbols"
            id="symbols"
            checked={props.hasSymbols}
            onChange={props.handleHasSymbol} />

          <label
            className="label mr-2"
            htmlFor="symbols">
            Símbolos
          </label>

          <input
            className="checkbox"
            type="checkbox"
            name="numbers"
            id="numbers"
            checked={props.hasNumbers}
            onChange={props.handleHasNumber} />

          <label
            className="label"
            htmlFor="numbers">
            Números
          </label>
        </div>

        <div className="password-container">
          <p className="password">{props.newPwd}</p>
        </div>

        {/* //*Btns Cta */}
        <div className="flex-center my-4">
          <Btn
            className="btn btn-cta"
            onClick={props.handleNewPwd}>Nova Senha</Btn>

          <Btn
            className="btn btn-cta"
            onClick={props.handleCopyBtn}>Copiar</Btn>

          <Btn
            className="btn btn-cta"
            onClick={props.handleSaveBtn}>Salvar</Btn>
        </div>

      </div>
    </main>
  )
}

export default MainContent