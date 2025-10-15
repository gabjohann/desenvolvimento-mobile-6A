import { Button } from '@/components/button'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'
import * as WebBrowser from 'expo-web-browser'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

WebBrowser.maybeCompleteAuthSession()

export default function SignIn() {
	const [isLoading, setIsLoading] = useState(false)
	const googleAuth = useOAuth({ strategy: 'oauth_google' })

	async function onGoogleSignIn() {
		try {
			setIsLoading(true)

			const redirectUrl = Linking.createURL('/')
			const oAuthFlow = await googleAuth.startOAuthFlow({ redirectUrl })

			if (oAuthFlow.authSessionResult?.type === 'success') {
				if (oAuthFlow.setActive) {
					await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId })
				}
			} else {
				setIsLoading(false) // caso usuário não se autenticar
			}
		} catch (error) {
			console.error(error)
			setIsLoading(false)
		}
	}

	useEffect(() => {
		WebBrowser.warmUpAsync()

		return () => {
			WebBrowser.coolDownAsync()
		}
	}, [])

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Entrar</Text>
			<Button
				icon="logo-google"
				title="Entrar com Google"
				onPress={onGoogleSignIn}
				isLoading={isLoading}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 32,
		justifyContent: 'center',
		gap: 12,
	},
	title: {
		fontSize: 22,
		fontWeight: 700,
	},
})
