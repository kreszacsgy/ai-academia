import React from 'react'
import Back from "../common/Back/Back"
import PriceCard from "./PriceCard"
import "./Pricing.css"
import Faq from "./Faq"

const Pricing = () => {
  return (
    <>
      <Back title='Choose The Right Plan' />
      <section className='price padding'>
        <div className='container grid'>
          <PriceCard />
        </div>
      </section>
      <Faq />
    </>
  )
}

export default Pricing