import React from 'react';
import TopBar from '../Topbar';
import SideMenu from '../Sidebar';
import { Container } from '@material-ui/core'





const MainLayout = () => {
    return (
        <>
            <TopBar />
            <div style={{ display: 'flex' }}>
                <SideMenu />
                <div style={{ width: '100%', marginTop: '20px' }}>
                    <Container>
                        <div style={{ border: '2px solid red', height: '400px', width: '100%' }}>

                        </div>
                    </Container>
                </div>

            </div>



        </>
    )
}


export default MainLayout;