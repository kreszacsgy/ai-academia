import React from 'react'
import "./Hero.css"
import Title from '../../common/Title/Title'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <>
        <section className="hero">
            <div className="container">
                <div className="row">
                    <Title subtitle="WELCOME TO AI ACADEMIA" title="Master AI. Lead the Way."/>
                    <p>
                        Ready to lead the AI revolution? AI Academia provides the hands-on knowledge and expert guidance you need to thrive. Discover powerful insights, build groundbreaking solutions, and elevate your skills in the rapidly evolving world of Artificial Intelligence.
                    </p>
                    <div className="button">
                        <button className="primary-btn">
                            GET STARTED NOW<i className="fa fa-long-arrow-alt-right"></i>
                        </button> 
                        <button >
                            VIEW COURSES <i className="fa fa-long-arrow-alt-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <div className="margin"></div>
    </>
  )
}

export default Hero
