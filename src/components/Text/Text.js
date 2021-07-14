import t from 'prop-types'

const Text = ({content, ...rest}) => <p>{content}</p>

Text.propTypes = {
	content: t.string.isRequired,
}

export default Text