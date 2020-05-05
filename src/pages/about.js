import React, { memo } from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

const About = memo(function About() {
  return (
    <div>
      <Helmet>
        <title key='title'>About | Manage enents</title>
      </Helmet>
      <style jsx>{`
        div {
          max-width: 980px;
          width: 100%;

          margin-inline-start: auto;
          margin-inline-end: auto;
        }
      `}</style>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, at
        quaerat harum quidem, quod esse repudiandae ducimus reiciendis quae
        numquam nostrum iusto expedita quasi. Provident quas nobis iste expedita
        id.
      </p>
      <Link href='/'>Go back home</Link>
    </div>
  )
})

export default About
