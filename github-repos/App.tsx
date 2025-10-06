import axios from 'axios'
import { useState } from 'react'
import {
	ActivityIndicator,
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native'
import { RepoItem, type RepoProps } from './components/repo-item'

type Props = RepoProps & {
	html_url: string
}

export default function App() {
	const [username, setUsername] = useState<string>('')
	const [loading, setLoading] = useState<boolean>(false)
	const [repos, setRepos] = useState<Props[]>([])
	const [error, setError] = useState<string | null>(null)

	// usando fetch API
	/* 	async function fetchRepos() {
		if (!username.trim()) {
			setError('Digite um nome de usuário')
			setRepos([])
			return
		}
		setLoading(true)
		setError(null)
		setRepos([])

		try {
			const response = await fetch(
				`https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100`,
			)

			if (response.status === 404) {
				setError('Usuário não encontrado')
				setLoading(false)
				return
			}

			if (!response.ok) {
				setError('Erro ao buscar os repositórios')
				setLoading(false)
				return
			}

			const data: Props[] = await response.json()
			//ordenação pelo número de estrelas de forma descrescente
			data.sort((a, b) => b.stargazers_count - a.stargazers_count)
			setRepos(data)
		} catch (error) {
			setError('Erro de rede')
			console.error(error)
		} finally {
			setLoading(false)
		}
	} */

	async function fetchRepos() {
		if (!username.trim()) {
			setError('Digite um nome de usuário')
			setRepos([])
			return
		}

		setLoading(true)
		setError(null)
		setRepos([])

		try {
			const response = await axios.get<Props[]>(
				`https://api.github.com/users/${encodeURIComponent(username)}/repos`,
				{
					params: {
						per_page: 100,
						sort: 'updated',
					},
				},
			)
			const data = response.data
			data.sort((a, b) => b.stargazers_count - a.stargazers_count)
			setRepos(data)
		} catch (err: any) {
			if (err.response && err.response.status === 404) {
				setError('Usuário não encontrado')
			} else {
				setError('Erro ao buscar o repositório')
			}
		} finally {
			setLoading(false)
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Buscar repositórios do GitHub</Text>

			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder="Digite o usuário do GitHub"
					value={username}
					onChangeText={setUsername}
					autoCapitalize="none"
					autoCorrect={false}
				/>
				<TouchableOpacity onPress={fetchRepos} style={styles.button}>
					<Text>Buscar</Text>
				</TouchableOpacity>
			</View>

			{loading && <ActivityIndicator size="large" style={{ marginTop: 20 }} />}

			{error ? <Text style={styles.error}>{error}</Text> : null}

			<FlatList
				data={repos}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<RepoItem
						id={item.id}
						name={item.name}
						description={item.description}
						stargazers_count={item.stargazers_count}
					/>
				)}
				contentContainerStyle={{ paddingBottom: 40 }}
				ListEmptyComponent={
					!loading && !error ? (
						<Text style={styles.empty}>Nenhum repositório para mostrar</Text>
					) : null
				}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: '600',
		marginBottom: 12,
	},
	form: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
		marginBottom: 12,
	},
	input: {
		flex: 1,
		height: 44,
		borderWidth: 1,
		borderRadius: 8,
		borderColor: '#ccc',
		paddingHorizontal: 10,
	},
	button: {
		backgroundColor: 'blue',
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderRadius: 8,
	},
	error: {
		color: 'red',
		marginTop: 12,
	},
	empty: {
		textAlign: 'center',
		marginTop: 20,
		color: '#666',
	},
})
