import React from 'react'
import './style.css'
import Nav from '@/app/Componants/Nav/Nav'
import Footer from '@/app/Componants/Footer/Footer'

const page = () => {
    return (
        <>
            <Nav background={true} />
            <section className="about">
                <div className="head">
                    <h2 className="route">Home &gt;&gt; About</h2>
                </div>
                <div className="top">
                    <h1>Welcom to my Art world</h1>
                </div>
                <div className="container">
                    <div className="box">
                        <h1 className="1">Who I Am</h1>
                        <p className="text">
                            Hi, I'm Raj, a sketch artist who loves creating detailed drawings. I'm passionate about making art that really captures
                            the essence of my subjects.
                        </p>
                    </div>
                    <div className="box">
                        <h1 className="2">What I Do</h1>
                        <p className="text">
                            I specialize in drawing with pencil, ink, and charcoal. Whether you need a realisticportrait or an imaginative scene, I can
                            create artwork that fits your needs. I take pridein delivering high-quality sketches and working closely with you to bring
                            your ideas to life.
                        </p>
                    </div>
                    <div className="box">
                        <h1 className="3">My Approach</h1>
                        <p className="text">
                            I enjoy working on different types of projects and always aim to meet deadlines while makingsure you’re happy with the
                            results. My goal is to create art that you love and that stands out.
                        </p>
                    </div>
                    <div className="box">
                        <h1 className="4">Portfolio Highlights</h1>
                        <p className="text">
                            Check out my portfolio to see a variety of my work. Each piece shows my dedication to detail and my love for art.
                        </p>
                    </div>
                    <div className="box">
                        <h1 className="5">What Clients Say</h1>
                        <p className="text">
                            "Raj's drawings are amazing! He captures every detail perfectly and his work is always top-notch. It’s been great working
                            with him." - A Happy Client
                        </p>
                    </div>
                    <div className="box">
                        <h1 className="6">Contact Me</h1>
                        <p className="text">
                            Want to work together or have questions? Feel free to contact me at raj.artist@example.com or call (123) 456-7890.
                            I look forward to hearing from you!
                        </p>
                    </div>
                </div>
                <Footer width={'100%'} />
            </section>
        </>
    )
}

export default page