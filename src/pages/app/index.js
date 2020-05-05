import React from 'react'
import Head from 'next/head'

import MainLayout from '../../components/layouts/main-layout'
import Backlog from '../../containers/backlog/backlog'

const App = () => (
  <MainLayout>
    <Head>
      <title>App</title>
    </Head>
    <Backlog />
  </MainLayout>
)

export default App
