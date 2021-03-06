import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Feedback from '../src/components/Feedback'
import SaveFeedback from '../src/components/SaveFeedback'
import Header from '../src/components/Header'
import MainContent from '../src/components/Main'
import Modal from '../src/components/Modal'
import { saveNewPwd } from '../src/utils/storage'
import pwdGenerator from '../src/utils/pwd_generator'

export default function Home() {
  const routes = useRouter()
  const handleSavedPwdPage = () => routes.push('/my-passwords')

  const [pwdSize, setPwdSize] = useState(15)
  const [pwdLabel, setPwdLabel] = useState('')

  const [hasNumbers, setHasNumbers] = useState(true)
  const [hasSymbols, setHasSymbols] = useState(true)

  const [newPwd, setNewPwd] = useState('')
  const [newPwdObj, setNewPwdObj] = useState({})

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false)
  const [isSaveFeedbackOpen, setIsSaveFeedbackOpen] = useState(false)
  const [isErrFeedbackOpen, setIsErrFeedbackOpen] = useState(false)

  const handleNewPwd = () => setNewPwd(pwdGenerator(pwdSize, hasSymbols, hasNumbers))

  const handlePwdSize = (event) => setPwdSize(Number(event.target.value))
  const handlePwdLabel = (event) => setPwdLabel(event.target.value)

  const handleHasNumber = () => setHasNumbers(!hasNumbers)
  const handleHasSymbol = () => setHasSymbols(!hasSymbols)

  const handleCopyBtn = () => {
    navigator.clipboard.writeText(newPwd)
    setIsFeedbackOpen(true)
    setTimeout(() => {
      setIsFeedbackOpen(false)
    }, 1500);
  }

  const handleSaveStorageBtn = () => {
    setIsSaveFeedbackOpen(true)
    setTimeout(() => {
      setIsSaveFeedbackOpen(false)
    }, 1500);
  }

  const handleErrFeedback = () => {
    setIsErrFeedbackOpen(true)
    setTimeout(() => {
      setIsErrFeedbackOpen(false)
    }, 1500);
  }

  const handleIsModalOpen = () => setIsModalOpen(!isModalOpen)

  const handleSaveBtn = () => {
    handleIsModalOpen(true)
    setPwdLabel('')
  }

  const handleSavePwdStorage = () => {
    setNewPwdObj({
      label: pwdLabel,
      pwdText: newPwd
    })

    saveNewPwd('@my-passwords', newPwdObj)
  }

  useEffect(() => {
    handleNewPwd()
  }, [pwdSize, hasSymbols, hasNumbers])

  return (
    <>
      <Head>
        <title>Password Generator</title>
        <meta name="description" content="Strong passwords website generator" />
        <meta name="keywords" content="Password passwords" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        handleNavigate={handleSavedPwdPage}
        btnLabel="Minhas Senhas" />

      <MainContent
        pwdSize={pwdSize}
        handlePwdSize={handlePwdSize}
        newPwd={newPwd}
        handleNewPwd={handleNewPwd}
        hasSymbols={hasSymbols}
        handleHasSymbol={handleHasSymbol}
        hasNumbers={hasNumbers}
        handleHasNumber={handleHasNumber}
        handleCopyBtn={handleCopyBtn}
        handleSaveBtn={handleSaveBtn} />

      {isFeedbackOpen && (
        <Feedback />
      )}

      {isModalOpen && (
        <Modal
          handleSaveStorageBtn={handleSaveStorageBtn}
          handleSavePwdStorage={handleSavePwdStorage}
          handleErrFeedback={handleErrFeedback}
          isErrFeedbackOpen={isErrFeedbackOpen}
          handleIsModalOpen={handleIsModalOpen}
          pwdLabel={pwdLabel}
          newPwd={newPwd}
          handlePwdLabel={handlePwdLabel} />
      )}

      {isSaveFeedbackOpen && (
        <SaveFeedback />
      )}

    </>
  )
}
