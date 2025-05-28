import { assets } from '../assets/assets'

const StarRating = ({ rating = 4 }) => {
	return (
		<div className='flex flex-row'>
			{Array(5)
				.fill('')
				.map((_, index) => (
					<img
						key={index}
						className='w-4.5 h-4.5'
						src={
							rating > index ? assets.starIconFilled : assets.starIconOutlined
						}
						alt='star-icon'
					/>
				))}
		</div>
	)
}

export default StarRating
