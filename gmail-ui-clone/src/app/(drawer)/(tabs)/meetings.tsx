import { fontFamily } from '@/styles/font-family'
import { StyleSheet, Text, View } from 'react-native'

export default function Meetings() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Meetings</Text>
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
