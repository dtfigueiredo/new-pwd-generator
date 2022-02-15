import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Btn from '../src/components/Button'
import Header from '../src/components/Header'
import pwdGenerator from './api/pwd_generator'

export default function Home() {
  const routes = useRouter()
  const handleSavedPwdPage = () => routes.push('/saved-pwd')

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
        handleSavedPwdPage={handleSavedPwdPage} />

      <main className="wrapper">
        <h1>Strong Password Generator</h1>

        <input type="range" min="10" max="30" value={pwdSize} onChange={handlePwdSize} />

        <input type="checkbox" name="specials" id="specials" checked={hasSymbols}
          onChange={handleHasSymbol} />
        <label htmlFor="specials">Símbolos</label>

        <input type="checkbox" name="numbers" id="numbers" checked={hasNumbers}
          onChange={handleHasNumber} />
        <label htmlFor="numbers">Números</label>

        <div>
          <p>{newPwd}</p>
        </div>

        <Btn
          className="btn btn-cta"
          onClick={handleCopyBtn}>COPY</Btn>

        <Btn
          className="btn btn-cta"
          onClick={''}>SAVE</Btn>

        {/* //TODO MODAL->SAVE LOCAL STORAGE */}
      </main>
    </div>
  )
}
