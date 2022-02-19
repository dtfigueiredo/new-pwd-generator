import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { saveNewPwd } from './api/storage'
import Feedback from '../src/components/Feedback'
import Header from '../src/components/Header'
import MainContent from '../src/components/Main'
import Modal from '../src/components/Modal'
import pwdGenerator from './api/pwd_generator'

//TODO -> VERIFICAR PQ SALVAMENTO STORAGE NÃO ESTÁ CORRETO

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

  const handlePwdSize = (event) => setPwdSize(Number(event.target.value))
  const handlePwdLabel = (event) => setPwdLabel(event.target.value)

  const handleHasNumber = () => setHasNumbers(!hasNumbers)
  const handleHasSymbol = () => setHasSymbols(!hasSymbols)

  const handleNewPwd = () => setNewPwd(pwdGenerator(pwdSize, hasSymbols, hasNumbers))

  const handleCopyBtn = () => {
    navigator.clipboard.writeText(newPwd)
    setIsFeedbackOpen(true)
    setTimeout(() => {
      setIsFeedbackOpen(false)
    }, 2000);
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
        newPwd={newPwd}
        hasSymbols={hasSymbols}
        hasNumbers={hasNumbers}
        handleNewPwd={handleNewPwd}
        handlePwdSize={handlePwdSize}
        handleHasNumber={handleHasNumber}
        handleHasSymbol={handleHasSymbol}
        handleCopyBtn={handleCopyBtn}
        handleSaveBtn={handleSaveBtn} />

      {isFeedbackOpen && (
        <Feedback />
      )}

      {isModalOpen && (
        <Modal
          handleSaveBtn={handleSaveBtn}
          handleSavePwdStorage={handleSavePwdStorage}
          handleIsModalOpen={handleIsModalOpen}
          pwdLabel={pwdLabel}
          newPwd={newPwd}
          handlePwdLabel={handlePwdLabel} />
      )}

    </>
  )
}
