import React from 'react'
import Title from '../common/Title/Title'
import { homeAbout } from '../../dummydata'
import AWrapper from './AWrapper'
import "./About.css"

const AboutCard = () => {
  return (
    <>
        <section className="aboutHome">
            <div className="container flexSB">
                <div className="left row">
                    <img src="./images/about.jpg" alt="" />
                </div>
                <div className="right row">
                    <Title subtitle="MASTER AI: LEARN ANYTHING" title="Benefits About Online Learning Expertise"/>
                    <div className="items">
                    {homeAbout.map((val) => (
                        <div className="item flexSB">
                            <div className="img">
                                <img src={val.cover} alt="" />
                            </div>
                            <div className="text">
                                <h2>{val.title}</h2>
                                <p>{val.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
                
            </div>
        </section>
        <AWrapper/>
    </>
  )
}

export default AboutCard
