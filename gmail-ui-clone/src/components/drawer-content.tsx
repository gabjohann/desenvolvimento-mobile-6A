import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import type { CustomOptions } from '@/types/navigation'
import type { DrawerContentComponentProps } from '@react-navigation/drawer'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

export function DrawerContent(drawerProps: DrawerContentComponentProps) {
	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Image
					source={require('@/assets/logo.png')}
					style={styles.logo}
					resizeMode="contain"
				/>
			</View>

			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 42 }}
			>
				<View style={styles.routesContainer}>
					{drawerProps.state.routes.map((route, index) => {
						const isFocused = drawerProps.state.index === index
						const options = drawerProps.descriptors[route.key]
							.options as CustomOptions

						if (options.title === undefined) {
							return null
						}

						const onPress = () => {
							const event = drawerProps.navigation.emit({
								type: 'drawerItemPress',
								canPreventDefault: true,
								target: route.key,
							})

							if (!isFocused && !event?.defaultPrevented) {
								drawerProps.navigation.navigate(route.name, route.params)
							}
						}

						return (
							<View key={route.key}>
								{options.sectionTitle && (
									<Text style={styles.sectionTitle}>
										{options.sectionTitle}
									</Text>
								)}
							</View>
						)
					})}
				</View>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		overflow: 'hidden',
		backgroundColor: colors.gray[600],
	},
	logoContainer: {
		marginTop: 80,
		width: '100%',
		borderBottomWidth: 1,
		borderBottomColor: '#6A7282',
		paddingBottom: 24,
	},
	logo: {
		width: 112,
		marginLeft: 20,
	},
	routesContainer: {
		marginTop: 8,
	},
	sectionTitle: {
		marginLeft: 16,
		marginTop: 24,
		fontFamily: fontFamily.heading,
		fontSize: 14,
		textTransform: 'uppercase',
		color: colors.gray[400],
	},
})
