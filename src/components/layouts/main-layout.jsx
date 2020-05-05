import React from 'react'

import Navbar from '../ui/navbar/navbar'

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default MainLayout
