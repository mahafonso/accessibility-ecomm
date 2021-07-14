import PreHeaderComponent from './PreHeader/PreHeader'

const Layout = ({ children }) => (
	<>
		<PreHeaderComponent />
		
		{children}
	</>
)

export default Layout