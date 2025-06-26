import React from "react"
import Back from "../common/Back/Back"
import TeamCard from "./TeamCard"
import "./Team.css"
import "../About/About.css"
import AWrapper from "../About/AWrapper"

const Team = () => {
  return (
    <>
      <Back title='Team' />
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      <AWrapper />
    </>
  )
}

export default Team