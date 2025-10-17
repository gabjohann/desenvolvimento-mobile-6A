import { router } from 'expo-router'
import { useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { Button } from '@/components/button'
import { Input } from '@/components/input'

export default function Index() {
	const [name, setName] = useState<string>()

	/* function handleMessage() {
		const name = 'Lucas'

		console.log('click')

		Alert.alert(`Olá, ${name}!`)
	}
 */

	function handleNext() {
		router.navigate('/dashboard')
	}

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Olá, {name}!</Text>

			<Input onChangeText={setName} />

			<Button
				title="Continuar"
				activeOpacity={0.8}
				//	onPress={() => router.navigate('/dashboard')}
				onPress={handleNext}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 32,
		justifyContent: 'center',
		gap: 22,
	},
	text: {
		color: '#453467',
		fontSize: 24,
		fontWeight: 700,
	},
})
