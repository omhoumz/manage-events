import React from 'react'
import HomePage from '../components/home-page/home-page'
import Helmet from 'react-helmet'

import { GlobalStyles } from '../components/ui/theme/global-styles.styled'

const Home = () => (
  <>
    <Helmet>
      <title key='title'>Home | Manage enents</title>
    </Helmet>

    <GlobalStyles />
    <HomePage />
  </>
)

export default Home
