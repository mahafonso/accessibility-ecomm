import t from 'prop-types'

const Title = ({content, ...rest}) => (
	<>
		<h1>{content} 1</h1>
		
		<h1>{content} 2</h1>
	</>
)

Title.propTypes = {
	content: t.string.isRequired,
}

export default Title