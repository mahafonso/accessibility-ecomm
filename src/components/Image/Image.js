import t from 'prop-types'

const Image = ({src, srcSet, ...rest}) => <img src={src} srcSet={srcSet} {...rest} />

Image.propTypes = {
	src: t.string.isRequired,
	srcSet: t.array,
}

export default Image