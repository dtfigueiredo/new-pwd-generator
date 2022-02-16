import Btn from '../Button'

const Modal = (props) => {

  return (
    <main className="wrapper">

      <div className="flex-center flex-col">

        <div className="flex justify-between items-center">
          <h2
            className="mt-8 text-center font-headings font-bold text-white text-xl sm:text-2xl">
            Para qual app/site é a senha?
          </h2>

          <button className="btn" onClick={props.handleIsModalOpen}>X</button>
        </div>

        {/* //*Input nome do site */}
        < input
          className="input-text"
          type="text"
          placeholder="Ex: facebook"
          value={props.pwdLabel}
          onChange={props.handlePwdLabel} />

        {/* //*Btns Cta */}
        <div className="flex-center">
          <Btn
            className="btn btn-cta"
            onClick={props.handleSaveBtn}>Finalizar</Btn>
        </div>

      </div>
    </main>
  )
}

export default Modal