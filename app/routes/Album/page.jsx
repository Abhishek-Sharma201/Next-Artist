'use client'
import React from 'react'
import './style.css'
import Nav from '../../Componants/Nav/Nav'
import { bestSellerProcuts, trendingProcuts } from '@/app/constants'
import AlbumCard from '@/app/Componants/Cards/AlbumCard'
import Footer from '@/app/Componants/Footer/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const albumPage = () => {
    return (
        <>
            <Nav background={true} />
            <ToastContainer />
            <div className="album-section">
                <div className="head">
                    <h2 className="route">Home &gt;&gt; Album</h2>
                </div>
                <div className="container">
                    <section className='trending'>
                        <div className="type">
                            <h1>Trending Products</h1>
                            <button className="see-all">See All</button>
                        </div>
                        <div className="cards">
                            {
                                trendingProcuts.map((card) => {
                                    return (
                                        <AlbumCard key={card.id}
                                            price={card.price}
                                            text={card.text}
                                            img={card.img}
                                            cardId={card.id}
                                            metaData={card.metaData}
                                        />
                                    )
                                })
                            }
                        </div>
                    </section>
                    <section className='best-seller'>
                        <div className="type">
                            <h1>Best seller</h1>
                            <button className="see-all">See All</button>
                        </div>
                        <div className="cards">
                            {
                                bestSellerProcuts.map((card) => {
                                    return (
                                        <AlbumCard key={card.id} price={card.price} text={card.text} img={card.img} />
                                    )
                                })
                            }
                        </div>
                    </section>
                </div>
                <Footer width={'100%'} />
            </div>
        </>
    )
}

export default albumPage