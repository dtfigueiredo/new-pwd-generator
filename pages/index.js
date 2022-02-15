import Head from 'next/head'
import { useState, useEffect } from 'react'
import Btn from '../src/components/Button'
// import styles from '../styles/Home.module.css'

import pwdGenerator from './api/pwd_generator'

export default function Home() {

  const [pwdSize, setPwdSize] = useState(15)
  const [newPwd, setNewPwd] = useState(' ')

  const handleNewPwd = (pwdSize) => {
    setNewPwd(pwdGenerator(pwdSize))
  }

  const handleCopyBtn = () => navigator.clipboard.writeText(newPwd)

  useEffect(() => {
    handleNewPwd(pwdSize)
  })

  return (
    <div>
      <Head>
        <title>Password Generator</title>
        <meta name="description" content="Strong passwords website generator" />
        <meta name="keywords" content="Password passwords" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Strong Password Generator</h1>

        <input type="checkbox" name="specials" id="specials" />
        <label htmlFor="specials">Símbolos</label>

        <input type="checkbox" name="numbers" id="numbers" />
        <label htmlFor="numbers">Números</label>

        <div>
          <p>{newPwd}</p>
        </div>

        <Btn onClick={handleCopyBtn}>COPIAR</Btn>
        <Btn onClick={''}>SALVAR</Btn>

        {/* //TODO MODAL->SAVE LOCAL STORAGE */}
      </main>

      <aside>
        <h2>SENHAS SALVAS</h2>
        <section>
          <ul>
            <li>
              <h3>SITE 01</h3>
              <p>GENERATED PWD 01</p>
            </li>
            <li>
              <h3>SITE 02</h3>
              <p>GENERATED PWD 02</p>
            </li>
            <li>
              <h3>SITE 03</h3>
              <p>GENERATED PWD 03</p>
            </li>
          </ul>
        </section>
      </aside>
    </div>
  )
}
