import {FC, PropsWithChildren, ReactNode} from 'react'
import Header from '@/components/Header'
import Head from 'next/head'


const Layout:FC<PropsWithChildren<unknown>> = ({children}) => {
  return (
    <>
    <Head>
      <title>Next</title>
    </Head>
    <Header/>
    {children}
    </>
  )
}

export default Layout