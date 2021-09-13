import React, { useContext, useState } from 'react';
import { storeContext } from '../../context/context';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Send, Drafts, SportsKabaddi, PhotoLibrary } from '@material-ui/icons'
import './Sidebar.css';
import { Link } from 'react-router-dom'






const Slidebar = (props) => {
	console.log(props)
	const initalState = useContext(storeContext);
	const { state } = initalState;
	console.log('state', initalState)
	return (
		<>
			<div
				className="sidebar"
				style={{ width: !state.toogleMenu ? '220px' : '60px' }}
			>
				<List component='nav' aria-labelledby="nested-list-subheader">
					<Link to='/main' className='item'>
						<ListItem button>
							<ListItemIcon>
								<Send style={{ color: "#ffffff" }} />
							</ListItemIcon>
							<ListItemText primary="Home" />
						</ListItem>
					</Link>

					<Link to='/message' className='item'>
						<ListItem button>
							<ListItemIcon>
								<Drafts style={{ color: "#ffffff" }} />
							</ListItemIcon>
							<ListItemText primary="Charts" />
						</ListItem>

					</Link>

					<Link to='/resturnent' className='item'>
						<ListItem button>
							<ListItemIcon>
								<SportsKabaddi style={{ color: "#ffffff" }} />
							</ListItemIcon>
							<ListItemText primary="Resturant" />
						</ListItem>
					</Link>

					<Link to='/food' className='item'>
						<ListItem button>
							<ListItemIcon>
								<PhotoLibrary style={{ color: "#ffffff" }} />
							</ListItemIcon>
							<ListItemText primary="Food" />
						</ListItem>
					</Link>

					<Link to='/revenue' className='item'>
						<ListItem button>
							<ListItemIcon>
								<SportsKabaddi style={{ color: "#ffffff" }} />
							</ListItemIcon>
							<ListItemText primary="Revenue" />
						</ListItem>
					</Link>

					<ListItem button>
						<ListItemIcon>
							<PhotoLibrary style={{ color: "#ffffff" }} />
						</ListItemIcon>
						<ListItemText primary="Apps" />
					</ListItem>

					<ListItem button>
						<ListItemIcon>
							<SportsKabaddi style={{ color: "#ffffff" }} />
						</ListItemIcon>
						<ListItemText primary="Sales" />
					</ListItem>

					<ListItem button>
						<ListItemIcon>
							<SportsKabaddi style={{ color: "#ffffff" }} />
						</ListItemIcon>
						<ListItemText primary="Bills" />
					</ListItem>

					<ListItem button>
						<ListItemIcon>
							<SportsKabaddi style={{ color: "#ffffff" }} />
						</ListItemIcon>
						<ListItemText primary="Charts" />
					</ListItem>

				</List>
			</div>
			{props.children}

		</>
	)
}

export default Slidebar;