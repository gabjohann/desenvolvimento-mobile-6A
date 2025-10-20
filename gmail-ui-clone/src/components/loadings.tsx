import { ActivityIndicator, StyleSheet } from 'react-native'

export function Loading() {
	return <ActivityIndicator style={styles.loading} />
}

const styles = StyleSheet.create({
	loading: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#101828',
	},
})
