import React from 'react'
import PropTypes from 'prop-types'
const Buttonbase = ({spacing = 2, children, direction= 'row', wrap = false}) => {

    const style = {
        gap: `${0.25 * spacing}rem`,
        flexDirection: direction,
        wrap: wrap ? 'wrap' : 'nowrap',
        display: 'flex'
    }
  return (
    <div style={style}>{children}</div>
  )
}

Buttonbase.propTypes = {
    spacing: PropTypes.number,
    direction: PropTypes.oneOf(['row', 'column']),
    wrap: PropTypes.bool,

}
export default Buttonbase