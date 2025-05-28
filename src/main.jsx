import { ClerkProvider } from '@clerk/clerk-react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Router from './Router.jsx'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
	throw new Error('Add your Clerk Publishable Key to the .env file')
}

createRoot(document.getElementById('root')).render(
	<ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	</ClerkProvider>
)
