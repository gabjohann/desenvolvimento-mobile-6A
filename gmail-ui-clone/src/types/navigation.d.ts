import type { IconNameType } from '@/components/drawer-button'
import type { DrawerNavigationOptions } from '@react-navigation/drawer'

interface CustomOptions extends DrawerNavigationOptions {
	iconName: IconNameType
	isDivider?: boolean
	notifications?: number
	sectionTitle?: string
}
