import styled from 'styled-components'

const PreHeader = styled.div``

const AccessibilityArea = styled.div``

const AccessibilityText = styled.a``

const AccessibilityMenu = styled.ul`
	display: none;
  
  &.opened {
	display: block;
  }
`

const AccessibilityMenuItem = styled.li``

export {
	PreHeader,
	AccessibilityArea,
	AccessibilityText,
	AccessibilityMenu,
	AccessibilityMenuItem,
}