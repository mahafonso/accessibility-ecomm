import t from 'prop-types'

const Text = ({content, ...rest}) => <img>{content}</img>

Text.propTypes = {
	content: t.string.isRequired,
}

export default Text