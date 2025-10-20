import { colors } from '@/styles/colors'
import type { ReactNode } from 'react'
import { StyleSheet, TextInput, type TextInputProps, View } from 'react-native'

type InputProps = {
	children: ReactNode
}

function Input({ children }: InputProps) {
	return <View style={styles.inputWrapper}>{children}</View>
}

function InputField({ ...rest }: TextInputProps) {
	return (
		<TextInput
			style={styles.inputField}
			placeholderTextColor={colors.gray[400]}
			cursorColor={colors.blue[600]}
			{...rest}
		/>
	)
}

Input.Field = InputField

const styles = StyleSheet.create({
	inputWrapper: {
		width: '100%',
		height: 56,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 16,
		borderRadius: 12,
		backgroundColor: '#333',
		padding: 16,
	},
	inputField: {
		flex: 1,
		fontSize: 16,
		fontWeight: 400,
		color: '#fFF',
	},
})

export { Input }
