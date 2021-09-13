import React, { useState } from 'react';
import './booking.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import waiterImage from '../../images/waiter1.png'




const Booking = () => {
	const [dropdown, setDropdown] = useState(true);


	const showDropdown = () => {
		setDropdown(!dropdown)

	}
	return (
		<>
			<div id="rooms" className="booking_slider">
				<div className="booking_container">
					<div className="booking_wrapper">
						<div className="booking_contants">
							<h2 className="booking_contants_heading">Book Now</h2>
							<div className="booking_main_input">
								<input className="booking_contants_input1" placeholder="name"></input>
								<input className="booking_contants_input3" placeholder="email"></input>
								<div className='booking_contants_input2'>
									<select placeholder='Variety of Rooms' style={{
										height: '52px',
										width: '100%',
										padding: '10px',
										marginTop: '10px',
										borderRadius: '3px'
									}}                                                    >

										<option>Single Room</option>
										<option>Double Rooms</option>
										<option> Three Rooms </option>
										<option> Four Rooms</option>
									</select>
								</div>


								<textarea className="booking_contants_input4" placeholder="message"></textarea>
								<div className="booking_contants_button">
									<button className="booking_contants_btn">Send Request</button>
								</div>

							</div>
						</div>
						<div className="booking_images">
							<img className="booking_image" src={waiterImage}></img>
						</div>
					</div>
				</div>

			</div>
		</>
	)
}


export default Booking;