import React from 'react';
import TopBar from '../Topbar';
import SideMenu from '../Sidebar';





const FoodLayout = () => {
	return (
		<>
			<TopBar />
			<div style={{ display: 'flex' }}>
				<SideMenu />
				<h1>hello Food</h1>
			</div>
		</>
	)
}


export default FoodLayout;