import t from 'prop-types'

const Text = ({content, ...rest}) => <a>{content}</a>

Text.propTypes = {
	content: t.string.isRequired,
}

export default Text