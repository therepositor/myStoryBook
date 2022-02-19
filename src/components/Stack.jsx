import PropTypes from 'prop-types';


const Stack = ({children, direction = 'row', spacing = 2, wrap = false}) => {
    const style = {
        flexDirection: direction,
        gap: `${spacing * 0.25}rem`,
        flexWrap: wrap ? 'wrap' : 'nowrap',
        display: 'flex'
    }

    return(
        <div style={style}>{children}</div>
    )
}
Stack.propTypes = {
    direction: PropTypes.oneOf(['row','column']),
    spacing: PropTypes.number,
    wrap: PropTypes.bool,

}
export default Stack