import Head from 'next/head'
import Image from 'next/image'
import Btn from '../src/components/Button'
import styles from '../styles/Home.module.css'

export default function Home() {

  const copiado = () => alert('Copiado')
  const salvado = () => alert('Salvado')

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
          <p>OUTPUT SENHA</p>
        </div>

        <Btn onClick={copiado}>COPIAR</Btn>
        <Btn onClick={salvado}>SALVAR</Btn>

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
