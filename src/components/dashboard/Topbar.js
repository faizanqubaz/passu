import { Menu, PersonPin, Mail, Notifications, SettingsPower, SettingsPhone ,Dehaze} from '@material-ui/icons';
import React, { useState, useContext } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge, } from '@material-ui/core';
import { storeContext } from '../../context/context';
import './dashboard.css'
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles((theme) => ({
	buttonExp: {
		'@media (max-width: 780px)' : {
		marginBottom:'20px'
			}
	},
	grow: {
		flexGrow: 1,
		marginTop: '65px'
	},
	newButton: {
		marginRight: '2px',
	},
	topbar_flex: {
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between'
	}
	,
	topbar_child1: {
		display: 'flex',
		alignItems: 'center'
	},
	topbar_child2: {
	display: 'block',
	marginLeft: '457px',
		'@media (max-width: 1000px)' : {
		display:'none'
		}
	},
	dehView: {
		display: 'none',
		'@media (max-width: 1000px)' : {
		display:'block'
		}
	},
	exp: {
		position: 'absolute',
    top: '54px',
    right: '4px',
    backgroundColor: 'gray',
		padding:'1rem 2rem',
		width:'10%'

	},
	inputWidth1:{
		width:'100px'
	},
	inputWidth2 : {
		width:'200px'
	}

}))




const Topbar = () => {
	const [views,setView]=useState(true)
	const [inpWidth,setInpWidth]=useState(false)
const [displayperson,setdisplayperson]=useState(true);
const [displayphone,setdisplayphone]=useState(true)
const [displaypower,setdisplaypower]=useState(true)
const [displaynotification,setdisplaynotification]=useState(true)
const [displaymessage,setdisplaymessage]=useState(true)


const displayMessage=()=>{
	setdisplaymessage(!displaymessage)
}
const displayNotification=()=>{
	setdisplaynotification(!displaynotification)
}
const settingPowers=()=>{
	setdisplaypower(!displaypower)
}
const	displayPerson =()=>{
	setdisplayperson(!displayperson)

}
	const initalState = useContext(storeContext);
	const { state, setState } = initalState;

	// const [menuBars, setMenuBar] = useState(true)
	const menuBarWidth = () => {
		setState({ ...state, toogleMenu: !state.toogleMenu, });
	}

const setInputWidth=()=>{
setInpWidth(!inpWidth)

}
const viewTopBar=()=>{
 setView(!views)
 
}
	const classes = useStyles()
	return (
		<>
			<div className={classes.grow}>
				<AppBar
					style={{
						backgroundColor: "#fff",
						color: "#000",
						boxShadow: "0px 1px 0px 1px #dcdcdc",
					}}
				>
					<Toolbar>
						<div className={classes.topbar_flex}>
							<div className={classes.topbar_child1}>
								<IconButton>
									<Menu onClick={menuBarWidth} style={{ color: 'black' }} />
								</IconButton>
								<Typography variant="h6" noWrap>
									Material-UI
                           </Typography>

								<InputBase onClick={setInputWidth}
								className={inpWidth ? classes.inputWidth1 : classes.inputWidth2 }
									placeholder="Search..!"
									style={{
										backgroundColor: '#cdcddd',
										borderRadius: '5px',
										marginLeft: '50px',
									}}
								/>
							</div>
							<div id='topBarchild' className={views ?  classes.topbar_child2 : classes.exp}>

								<IconButton className={classes.buttonExp}>
									<Badge onClick={displayMessage} badgeContent={state.Message} color='secondary' />
									<Mail  style={{ color: 'black' }} />
								</IconButton>

								<IconButton className={classes.buttonExp} onClick={displayNotification}>
									<Badge badgeContent={state.Notification} color='secondary'>
										<Notifications   style={{ color: 'black' }} />
									</Badge>
								</IconButton>

								<IconButton className={classes.buttonExp} onClick={settingPowers}>
									<Badge>
										<SettingsPower style={{ color: 'black' }} />
									</Badge>
								</IconButton>

								<IconButton className={classes.buttonExp} >
									<Badge>
										<SettingsPhone style={{ color: 'black' }} />
									</Badge>
								</IconButton>
								<IconButton >
									<Badge  >
										<PersonPin onClick={displayPerson} style={{ color: 'black' }} />
									</Badge>
								</IconButton>

								<IconButton>
									<Badge>
										<Menu className='topbarmenu' style={{ color: 'black', display: 'none' }} />
									</Badge>
								</IconButton>
							</div>
							<IconButton>
								<Dehaze onClick={viewTopBar} className={classes.dehView} />
							</IconButton>
						</div>
					</Toolbar>

				</AppBar>
				<div className={displayperson ? 'ccc' :  'ddd'}>
		         <h3>Status</h3>
						 <h3>Logout</h3>
						 <h3>Whats</h3>
						 <h3>Papu</h3>
				</div>
				<div className={displaymessage ? 'msg' :  'setmsg'}>
		         <p style={{color:'red'}}>Check out new messages</p>
						 <h3>Logout</h3>
						 <h3>Whats</h3>
						 <h3>Papu</h3>
				</div>
				<div className={displaynotification ? 'notify' :  'setnotify'}>
		         <h3>Status</h3>
						 <h3>Logout</h3>
						 <h3>Whats</h3>
						 <h3>Papu</h3>
				</div>
				<div className={displaypower ? 'power' :  'setpower'}>
		         <h3>Status</h3>
						 <h3>Logout</h3>
						 <h3>Whats</h3>
						 <h3>Papu</h3>
				</div>
			</div>
		</>
	)
}


export default Topbar;