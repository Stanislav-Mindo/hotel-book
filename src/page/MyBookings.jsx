import { useState } from 'react'
import { assets, userBookingsDummyData } from '../assets/assets'
import Title from '../components/Title'

const MyBookings = () => {
	const [bookings, setBookings] = useState(userBookingsDummyData)
	return (
		<div className=' py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>
			<Title
				title='My Bookings'
				subTitle='Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks'
				align='left'
			/>
			<div className='max-w-6xl mt-8 w-full text-gray-800'>
				<div className='hidden md:grid md:grid-cols-[3fr_2fr_2fr] w-full border-b border-gray-300 font-medium text-base py-3 whitespace-nowrap'>
					<div className='w-1/3'>Hotels</div>
					<div className='w-1/3'>Date & Timings</div>
					<div className='w-1/3'>Payment</div>
				</div>
				{bookings.map(booking => (
					<div
						className='grid grid-cols-1 md:grid-cols-[3fr_2fr_2fr] w-full border-b border-gray-300 py-6 first:border-t gap-5'
						key={booking._id}
					>
						{/* Hotels Details */}
						<div className='flex flex-col md:flex-row'>
							<img
								className='min-md:w-44 rounded shadow object-cover'
								src={booking.room.images[0]}
								alt='room-image'
							/>
							<div className='flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4'>
								<p className='font-playfair text-2xl'>
									{booking.hotel.name}
									<span className='font-iner text-sm'>
										{' '}
										({booking.room.roomType})
									</span>
								</p>
								<div className='flex items-center gap-1 text-sm text-gray-500'>
									<img src={assets.locationIcon} alt='location-icon' />
									<span>{booking.hotel.address}</span>
								</div>
								<div className='flex items-center gap-1 text-sm text-gray-500'>
									<img src={assets.guestsIcon} alt='location-icon' />
									<span>Guests : {booking.guests}</span>
								</div>
								<p className='text-base'>
									Total:{' '}
									{new Intl.NumberFormat('en-US', {
										style: 'currency',
										currency: 'USD',
									}).format(booking.totalPrice)}
								</p>
							</div>
						</div>
						{/* Date & Timeings */}
						<div className='flex flex-row md:items-center md:gap-8 gap-4 mt-3'>
							<div>
								<p>Check-In:</p>
								<p className='text-gray-500 text-sm'></p>
								{new Date(booking.checkInDate).toDateString()}
							</div>
							<div>
								<p>Check-Out:</p>
								<p className='text-gray-500 text-sm'></p>
								{new Date(booking.checkOutDate).toDateString()}
							</div>
						</div>
						{/* Payent Status */}
						<div className='flex flex-col items-start justify-center pt-3'>
							<div className='flex items-center gap-2'>
								<div
									className={`h-3 w-3 rounded-full ${
										booking.isPaid ? 'bg-green-500' : 'bg-red-500'
									}`}
								></div>
								<p
									className={`text-sm ${
										booking.isPaid ? 'text-green-500' : 'text-red-500'
									}`}
								>
									{booking.isPaid ? 'Paid' : 'Unpaid'}
								</p>
							</div>
							{!booking.isPaid && (
								<button className='px-4 py-1.5 mt-4 text-xs border border-gray-400 rounded-full hover:bg-gray-50 transition-all cursor-pointer'>
									Pay Now
								</button>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default MyBookings
