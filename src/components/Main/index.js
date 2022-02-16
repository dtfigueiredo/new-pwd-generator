import React, { useEffect } from 'react'
import Btn from '../Button'

const MainContent = (props) => {

  return (
    <main className="wrapper">
      <h1>Strong Password Generator</h1>

      <input type="range" min="10" max="30" value={props.pwdSize} onChange={props.handlePwdSize} />

      <input type="checkbox" name="specials" id="specials" checked={props.hasSymbols}
        onChange={props.handleHasSymbol} />
      <label htmlFor="specials">Símbolos</label>

      <input type="checkbox" name="numbers" id="numbers" checked={props.hasNumbers}
        onChange={props.handleHasNumber} />
      <label htmlFor="numbers">Números</label>

      <div>
        <p>{props.newPwd}</p>
      </div>

      <Btn
        className="btn btn-cta"
        onClick={props.handleCopyBtn}>COPY</Btn>

      <Btn
        className="btn btn-cta"
        onClick={console.log('clicado')}>SAVE</Btn>

      {/* //TODO MODAL->SAVE LOCAL STORAGE */}
    </main>
  )
}

export default MainContent