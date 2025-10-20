import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { MaterialIcons } from '@expo/vector-icons'
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	type TouchableOpacityProps,
} from 'react-native'

type FloatButtonProps = TouchableOpacityProps & {
	icon?: keyof typeof MaterialIcons.glyphMap
}

export function FloatButton({ icon, ...rest }: FloatButtonProps) {
	return (
		<TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
			<MaterialIcons
				name={icon}
				size={22}
				color={colors.orange[500]}
				style={styles.icon}
			/>

			<Text style={styles.text}>Escrever</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		position: 'absolute',
		bottom: 16,
		right: 16,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: colors.gray[600],
		paddingHorizontal: 32,
		paddingVertical: 16,
		borderRadius: 9999,
	},
	icon: {
		marginRight: 4,
	},
	text: {
		color: colors.orange[500],
		fontFamily: fontFamily.subtitle,
		fontSize: 16,
	},
})
