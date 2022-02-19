import { useState, useEffect } from 'react'
import Head from "next/head";
import { useRouter } from 'next/router'
import { FiTrash2 } from 'react-icons/fi'
import Header from "../src/components/Header";
import Feedback from "../src/components/Feedback";
import { getSavedPwd, deletePwd } from './api/storage'

export default function SavedPwds() {
  const routes = useRouter()
  const handleHomePage = () => routes.push('/')

  const [savedPwdList, setSavedPwdList] = useState([])
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false)

  const handleCopyBtn = (password) => {
    navigator.clipboard.writeText(password)
    setIsFeedbackOpen(true)
    setTimeout(() => {
      setIsFeedbackOpen(false)
    }, 2000);
  }

  useEffect(() => {
    const savedPwd = async () => {
      const result = await getSavedPwd('@my-passwords')
      setSavedPwdList(result)
    }

    savedPwd()
  }, [])

  return (
    <>
      <Head>
        <title>My Passwords</title>
        <meta name="description" content="Strong passwords website generator" />
        <meta name="keywords" content="Password passwords" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        handleNavigate={handleHomePage}
        btnLabel="Home Page" />

      <main className="wrapper">
        <div className="flex-center flex-col">

          <h1 className="mt-4 mb-8 text-center font-headings font-bold text-white text-xl sm:text-3xl">
            Minhas Senhas
          </h1>

          <ul className="saved-pwd-list">

            {isFeedbackOpen && (
              <Feedback />
            )}

            {savedPwdList.length === 0
              ? (<div>
                <h2 className="text-center text-white">LISTA VAZIA</h2>
              </div>)
              : (savedPwdList.map((password, index) => (
                <li key={index} className="saved-pwd">

                  <div className="flex justify-between items-center">
                    <h3 className="text-gray-50 uppercase">{password.label}</h3>
                    <button className="trash"><FiTrash2 /></button>
                  </div>

                  <div className="flex-center">
                    <button
                      onClick={handleCopyBtn}
                      className="copy-pwd">{password.pwdText}</button>
                  </div>

                </li>
              )))
            }
          </ul>
        </div>
      </main>
    </>
  )
}