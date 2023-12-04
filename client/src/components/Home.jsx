import React from 'react';
import "../CSS/Home.css"
import Home2 from './Home2';

import { NavBar } from './NavBar';
const Home= () => {
return (
<div>
    <header>
    <NavBar id="navbar"/>    
    </header>
    <Home2/>
    <main>
    
    </main>
</div>
);
}

export default Home;