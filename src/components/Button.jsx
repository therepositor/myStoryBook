import PropTypes from 'prop-types'

const Button = ({backgroundColor = 'red', label, onClick, size='md'}) => {
    let scale = 1;
    if (size === 'md') scale = 0.75;
    if (size === 'lg') scale = 1.5;

    const style = {
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
        border: 'none',
        backgroundColor,
    }

    return(
        <button style={style} onClick={onClick}>{label}</button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg'])

}
export default Button