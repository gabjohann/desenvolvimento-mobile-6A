import * as QuickActions from 'expo-quick-actions'
import { useQuickActionCallback } from 'expo-quick-actions/hooks'
import { useEffect } from 'react'
import { Platform, Text, View } from 'react-native'

export default function Home() {
    useQuickActionCallback((action) => {
        console.log(action)
    })

    useEffect(() => {
        QuickActions.setItems([
            {
                id: '1',
                title: 'Ajuda',
                subtitle: 'Precisando de ajuda?',
                icon:
                    Platform.OS === 'ios'
                        ? 'symbol:person.circle.badge.questionmark'
                        : 'help_icon',
                params: {
                    href: '/help',
                },
            },
        ])
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 32 }}>Home</Text>
        </View>
    )
}
