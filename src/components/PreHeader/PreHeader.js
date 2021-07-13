import ContainerComponent from '../common/Container/Container'
import {
	PreHeader,
	AccessibilityArea,
	AccessibilityText,
	AccessibilityMenu,
	AccessibilityMenuItem,
} from './PreHeaderStyle'

const PreHeaderComponent = () => {
	const openAccessibilityMenu = () => {
		console.log('openAccessibilityMenu')
		
		document.getElementById('accessibility-menu').classList.add('opened')
		
		document.addEventListener('keydown', e => {
			if (e.keyCode === 40) {
				console.log('keyDown')
			}
		})
	}
	
	return (
		<PreHeader>
			<ContainerComponent>
				<AccessibilityArea>
					<AccessibilityText
						id="open-accessibility-menu"
						href="#"
						role="button"
						aria-haspopup="true"
						aria-expanded="false"
						aria-controls="accessibility-menu"
						onFocus={() => openAccessibilityMenu()}
					>
						Menu de Acessibilidade
					</AccessibilityText>
					
					<AccessibilityMenu id="accessibility-menu">
						<AccessibilityMenuItem>Alto Contraste</AccessibilityMenuItem>
						<AccessibilityMenuItem>Aumentar Fontes</AccessibilityMenuItem>
						<AccessibilityMenuItem>Textos em Negrito</AccessibilityMenuItem>
						<AccessibilityMenuItem>Inverter Cores</AccessibilityMenuItem>
					</AccessibilityMenu>
				</AccessibilityArea>
			</ContainerComponent>
		</PreHeader>
	)
}

export default PreHeaderComponent