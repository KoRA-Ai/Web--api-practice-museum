import React from 'react'
import {Link} from 'react-router-dom'
import {useRef} from 'react'
import './Navbar.css'

export default function Navbar() {
    const navRef = useRef();



    return (
        <header>
            <nav ref = {navRef}>
                <Link to="/">
                    <div className='titleText'>
                        <h1>東美館                        </h1> 
                        <h3>業務成果統計</h3>
                    </div>
                </Link>   
            </nav>
            
        </header>
    )
}
