import React from 'react'
import "./Hero.css"
import Title from '../../common/Title/Title'


const Hero = () => {
  return (
    <>
        <section className="hero">
            <div className="container">
                <div className="row">
                    <Title subtitle="WELCOME TO AI ACADEMIA" title="Your Gateway to Cutting-Edge AI Expertise!"/>
                    <p>
                        Your Gateway to Cutting-Edge AI Expertise!
Unlock your potential in the rapidly evolving world of Artificial Intelligence. At AI Academia, we believe the future is intelligent, and we're here to equip you with the knowledge and skills to shape it. Dive into the exciting realm of AI and transform your career.
                    </p>
                    <div className="button">
                        <button className="primary-btn">
                            GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
                        </button>
                        <button >
                            VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
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
