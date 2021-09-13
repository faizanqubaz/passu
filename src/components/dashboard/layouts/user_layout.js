import React from 'react';
import TopBar from '../Topbar';
import SideMenu from '../Sidebar';





const UserLayout = () => {
	return (
		<>
			<TopBar />
			<div style={{ display: 'flex' }}>
				<SideMenu />
				<h1>hello Users</h1>
			</div>



		</>
	)
}


export default UserLayout;