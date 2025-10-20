import { Image, type ImageProps, StyleSheet } from 'react-native'

type AvatarProps = ImageProps & {
	size?: 'small' | 'medium'
}

export function Avatar({ size = 'medium', ...rest }: AvatarProps) {
	const avatarSizeStyle =
		size === 'small' ? styles.avatarSmall : styles.avatarMedium

	return <Image style={[styles.base, avatarSizeStyle]} {...rest} />
}

const styles = StyleSheet.create({
	base: {
		borderRadius: 9999,
	},
	avatarSmall: {
		width: 32,
		height: 32,
	},
	avatarMedium: {
		width: 40,
		height: 40,
	},
})
