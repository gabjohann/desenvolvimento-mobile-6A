import { Loading } from '@/components/loadings'
import {
	Roboto_400Regular,
	Roboto_500Medium,
	Roboto_700Bold,
	useFonts,
} from '@expo-google-fonts/roboto'
import { Slot } from 'expo-router'
import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function Layout() {
	const [fontsLoaded] = useFonts({
		Roboto_400Regular,
		Roboto_500Medium,
		Roboto_700Bold,
	})

	if (!fontsLoaded) {
		return <Loading />
	}

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<StatusBar barStyle="light-content" />
			<Slot />
		</GestureHandlerRootView>
	)
}
