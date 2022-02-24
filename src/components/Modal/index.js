import Btn from '../Button'
import ErrorFeedback from '../ErrFeedback'

const Modal = (props) => {

  const savePwdInStorage = () => {
    let label = props.pwdLabel
    let password = props.newPwd

    if (!label || !password) {
      props.handleErrFeedback()
      return
    }

    props.handleSavePwdStorage(label, password)
    props.handleSaveStorageBtn()
    props.handleIsModalOpen()
  }

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

        {props.isErrFeedbackOpen && (
          <ErrorFeedback />
        )}

        < input
          className="input-text"
          type="text"
          placeholder="Ex: facebook"
          value={props.pwdLabel}
          onChange={props.handlePwdLabel} />

        <div className="flex-center flex-col">
          <Btn
            className="btn btn-cta"
            onClick={() => savePwdInStorage()}>Armazenar</Btn>
        </div>

      </div>
    </main>
  )
}

export default Modal