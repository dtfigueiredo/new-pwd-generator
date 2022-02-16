import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Header from '../src/components/Header'
import MainContent from '../src/components/Main'
import pwdGenerator from './api/pwd_generator'

export default function Home() {
  const routes = useRouter()
  const handleSavedPwdPage = () => routes.push('/my-passwords')

  const [pwdSize, setPwdSize] = useState(15)
  const [hasNumbers, setHasNumbers] = useState(true)
  const [hasSymbols, setHasSymbols] = useState(true)
  const [newPwd, setNewPwd] = useState('')

  const handlePwdSize = (event) => {
    setPwdSize(Number(event.target.value))
  }
  const handleHasNumber = () => setHasNumbers(!hasNumbers)
  const handleHasSymbol = () => setHasSymbols(!hasSymbols)

  const handleNewPwd = () => setNewPwd(pwdGenerator(pwdSize, hasSymbols, hasNumbers))

  const handleCopyBtn = () => navigator.clipboard.writeText(newPwd)

  useEffect(() => {
    handleNewPwd()
  }, [pwdSize, hasSymbols, hasNumbers])

  return (
    <div>
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
        handleCopyBtn={handleCopyBtn} />
    </div>
  )
}
