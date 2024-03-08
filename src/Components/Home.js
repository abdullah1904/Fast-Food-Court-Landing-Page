import React from 'react'
import Hero from './Hero';
import Menu from './Menu';
import About from './About';
import BookTable from './BookTable';
import Accordion from './Accordion';

export default function Home() {
    return (
        <>
            <Hero />
            <Menu />
            <About/>
            <BookTable/>
            <Accordion/>
        </>
    )
}
