'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { bannerImage, logoImage } from '@/app/utils';
import Link from 'next/link';
import './Nav.css';
import { useRouter } from 'next/navigation';

const Nav = ({ background }) => {
    const router = useRouter();
    const [isNavOpened, setIsNavOpened] = useState(false);

    const toggleNav = () => {
        setIsNavOpened(!isNavOpened);
    };

    const goToLogin = () => {
        router.push('/login');
    };

    return (
        <div className='wrapper'>
            <Image className='backImg' src={bannerImage} style={{ display: (background) ? `block` : 'none' }} priority={true} alt='backImg' />
            <nav className={`navBar ${isNavOpened ? 'navBarOpened' : ''}`}>
                <div className='navLogo'>
                    <Image className='logoImage' priority={true} src={logoImage} alt="Logo" />
                </div>
                <div className='menu-btn' onClick={toggleNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5.0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </div>
                <ul className={`navList ${isNavOpened ? 'navListOpened' : ''}`}>
                    <li className='navItem'><Link href="/">Home</Link></li>
                    <li className='navItem'><Link href="/routes/About">About</Link></li>
                    <li className='navItem'><Link href="/routes/Album">Album</Link></li>
                    <li className='navItem'><Link href="/routes/Album">Pricing</Link></li>
                    <li className='navItem'><Link href="/routes/Contact">Contact</Link></li>
                    <li className='navItem'><Link href="/routes/Admin">Admin</Link></li>
                </ul>
                <div className="icons">
                    <div className="user" onClick={goToLogin}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" className="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                        </svg>
                    </div>
                    <div className="shop">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" className="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                        </svg>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
