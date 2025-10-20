import { fontFamily } from '@/styles/font-family'
import { StyleSheet, Text, View } from 'react-native'

export default function Chat() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Chat</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#111827',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontFamily: fontFamily.heading,
		fontSize: 24,
		color: '#FFF',
	},
})
