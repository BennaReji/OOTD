import React from 'react'
import Navbar from "../components/Navbar";
import BottomBar from "../components/BottomBar";
function MainLayout({children}) {
    return (
        <div >

            <Navbar />
            <div>{children}</div>
            <BottomBar />
        </div>
    );
}

export default MainLayout;