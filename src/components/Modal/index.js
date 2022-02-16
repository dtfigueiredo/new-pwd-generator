import Btn from '../Button'

const Modal = (props) => {

  return (
    <main className="wrapper">

      <div className="flex-center flex-col">

        <div className="flex justify-between items-center mt-8 ">
          <h2
            className="text-center font-headings font-bold text-white text-xl sm:text-2xl mr-2">
            Para qual app/site é a senha?
          </h2>

          <button className="btn btn-close" onClick={props.handleIsModalOpen}>X</button>
        </div>

        < input
          className="input-text"
          type="text"
          placeholder="Ex: facebook"
          value={props.pwdLabel}
          onChange={props.handlePwdLabel} />


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