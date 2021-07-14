import t from 'prop-types'

const Image = ({src, alt, srcSet, ...rest}) => <img src={src} srcSet={srcSet} alt={alt} {...rest} />

Image.propTypes = {
	src: t.string.isRequired,
	alt: t.string.isRequired,
	srcSet: t.array,
}

export default Image