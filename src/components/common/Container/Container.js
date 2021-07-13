import {
	Container
} from './ContainerStyle'

const ContainerComponent = ({ children, ...ref }) => (
	<Container {...ref}>{children}</Container>
)

export default ContainerComponent