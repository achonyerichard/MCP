import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import Services from '../Services'
import Card from '../components/Card'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Slider/>
            <Services/>
            <Card/>
        </div>
    )
}

export default Home
