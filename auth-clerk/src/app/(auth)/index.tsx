import { Button } from '@/components/button'
import { useAuth, useUser } from '@clerk/clerk-expo'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Home() {
	const { user } = useUser()
	const { signOut } = useAuth()

	return (
		<View style={styles.container}>
			<Image source={{ uri: user?.imageUrl }} style={styles.img} />
			<Text style={styles.text}>Olá, {user?.firstName}!</Text>
			<Button icon="exit" title="Sair" onPress={() => signOut()} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 32,
		alignItems: 'center',
		justifyContent: 'center',
		gap: 12,
	},
	text: {
		fontSize: 18,
		fontWeight: 700,
	},
	img: {
		width: 92,
		height: 92,
		borderRadius: 12,
	},
})
