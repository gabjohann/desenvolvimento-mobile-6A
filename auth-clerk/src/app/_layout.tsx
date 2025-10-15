import { tokenCache } from '@/storage/token-cache'
import { ClerkProvider, useAuth } from '@clerk/clerk-expo'
import { router, Slot } from 'expo-router'
import { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'

const PUBLIC_CLERK_PUBLISHABLE_KEY =
	process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

function InitialLayout() {
	const { isSignedIn, isLoaded } = useAuth()

	useEffect(() => {
		if (!isLoaded) {
			return
		}

		if (isSignedIn) {
			router.replace('/(auth)')
		} else {
			router.replace('/(public)')
		}
	}, [isSignedIn])

	return isLoaded ? (
		<Slot />
	) : (
		<ActivityIndicator
			style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
		/>
	)
}

export default function Layout() {
	return (
		<ClerkProvider
			publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY}
			tokenCache={tokenCache}
		>
			<InitialLayout />
		</ClerkProvider>
	)
}
