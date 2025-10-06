import { StyleSheet, Text, View } from 'react-native'

export type RepoProps = {
	id: number
	name: string
	description: string | null
	stargazers_count: number
}

export function RepoItem({ name, description, stargazers_count }: RepoProps) {
	return (
		<View style={styles.repo}>
			<Text style={styles.repoName}>{name}</Text>
			<Text style={styles.repoDescription}>
				{description ?? 'Sem descrição'}
			</Text>
			<Text style={styles.repoStars}>⭐ {stargazers_count}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	repo: {
		padding: 12,
		borderBottomWidth: 1,
		borderBottomColor: '#eee',
	},
	repoName: { fontWeight: '700' },
	repoDescription: {
		color: '#555',
		marginTop: 4,
	},
	repoStars: {
		marginTop: 6,
		color: '#333',
	},
})
