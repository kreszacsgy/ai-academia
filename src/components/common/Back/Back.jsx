import React from 'react'
import { useLocation } from 'react-router-dom'

const Back = ({ title }) => {
  const location = useLocation()
  const path = location.pathname.split('/')[1] || 'home'

  return (
    <>
      <section className={`back back-${path}`}>
        <h2>Home / {path}</h2>
        <h1>{title}</h1>
      </section>
      <div className="margin"></div>
    </>
  )
}

export default Back
