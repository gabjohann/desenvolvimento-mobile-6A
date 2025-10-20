import { Avatar } from '@/components/avatar'
import { Email } from '@/components/email'
import { FloatButton } from '@/components/float-button'
import { Input } from '@/components/input'
import { MenuButton } from '@/components/menu-button'
import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { EMAILS } from '@/utils/emails'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default function Home() {
	return (
		<View style={styles.container}>
			<Input>
				<MenuButton />
				<Input.Field placeholder="Pesquisar no e-mail" />
				<Avatar source={{ uri: 'https://github.com/gabjohann.png' }} />
			</Input>

			<FlatList
				data={EMAILS}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <Email data={item} />}
				contentContainerStyle={styles.listContent}
				ListHeaderComponent={() => (
					<Text style={styles.sectionTitle}>Entrada</Text>
				)}
				showsVerticalScrollIndicator={false}
			/>

			<FloatButton icon="edit" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#101828',
		padding: 16,
		paddingTop: 56,
	},
	listContent: {
		rowGap: 24,
	},
	sectionTitle: {
		marginTop: 24,
		fontFamily: fontFamily.subtitle,
		color: colors.gray[400],
		textTransform: 'uppercase',
	},
})
