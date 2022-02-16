import Head from "next/head";
import { useRouter } from 'next/router'
import Header from "../src/components/Header";

export default function SavedPwds() {

  const routes = useRouter()
  const handleHomePage = () => routes.push('/')

  return (
    <div>
      <Head>
        <title>My Passwords</title>
        <meta name="description" content="Strong passwords website generator" />
        <meta name="keywords" content="Password passwords" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        handleNavigate={handleHomePage}
        btnLabel="Home Page" />
    </div>
  )
}