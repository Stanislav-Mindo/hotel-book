import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import HotelReg from './components/HotelReg'
import Navbar from './components/Navbar'
import AllRooms from './page/AllRooms'
import Home from './page/Home'
import MyBookings from './page/MyBookings'
import RoomDetails from './page/RoomDetails'
import AddRoom from './page/hotelOwner/AddRoom'
import Dashboard from './page/hotelOwner/Dashboard'
import Layout from './page/hotelOwner/Layout'
import ListRoom from './page/hotelOwner/ListRoom'

const Router = () => {
	const isOpenOwner = useLocation().pathname.includes('owner')
	return (
		<div>
			{!isOpenOwner && <Navbar />}
			{false && <HotelReg />}
			<div className='min-h-[70vh]'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/rooms' element={<AllRooms />} />
					<Route path='/rooms/:id' element={<RoomDetails />} />
					<Route path='/my-bookings' element={<MyBookings />} />
					<Route path='/owner' element={<Layout />}>
						<Route index element={<Dashboard />} />
						<Route path='add-room' element={<AddRoom />} />
						<Route path='list-room' element={<ListRoom />} />
					</Route>
				</Routes>
			</div>
			<Footer />
		</div>
	)
}

export default Router
