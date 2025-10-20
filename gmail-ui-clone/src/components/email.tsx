import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import type { EmailDataProps } from '@/utils/emails'
import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from './avatar'

type EmailProps = {
	data: EmailDataProps
}

export function Email({ data }: EmailProps) {
	return (
		<View style={styles.container}>
			<Avatar source={{ uri: 'https://github.com/gabjohann.png' }} />

			<View style={styles.content}>
				<View style={styles.header}>
					{data.marker && (
						<MaterialIcons
							name="label-important"
							size={16}
							color={colors.yellow[600]}
							style={styles.markerIcon}
						/>
					)}

					<Text style={styles.name} numberOfLines={1}>
						{data.name}
					</Text>

					<Text style={styles.date}>{data.date}</Text>
				</View>

				<Text style={styles.subject} numberOfLines={1} ellipsizeMode="tail">
					{data.subject}
				</Text>

				<View style={styles.footer}>
					<Text style={styles.message} numberOfLines={1} ellipsizeMode="tail">
						{data.message}
					</Text>

					<MaterialIcons
						name={data.start ? 'star' : 'star-outline'}
						size={22}
						color={data.start ? colors.yellow[600] : colors.blue[600]}
					/>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		marginBottom: 16,
	},
	content: {
		flex: 1,
		marginLeft: 16,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 4,
	},
	markerIcon: {
		marginRight: 4,
	},
	name: {
		flex: 1,
		fontSize: 18,
		color: '#9CA3AF',
		fontFamily: fontFamily.subtitle,
	},
	date: {
		fontSize: 14,
		color: '#9CA3AF',
		fontFamily: fontFamily.body,
	},
	subject: {
		fontSize: 16,
		color: '#9CA3AF',
		fontFamily: fontFamily.body,
		marginBottom: 4,
	},
	footer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	message: {
		flex: 1,
		fontSize: 16,
		color: '#9CA3AF',
		fontFamily: fontFamily.body,
		marginRight: 16,
	},
})
