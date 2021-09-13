import React from 'react';
import TopBar from '../Topbar';
import SideMenu from '../Sidebar';





const ResturentLayout = () => {
    return (
        <>
            <TopBar />
            <div style={{ display: 'flex' }}>
                <SideMenu />
                <h1>hello Resturent</h1>
            </div>



        </>
    )
}


export default ResturentLayout;