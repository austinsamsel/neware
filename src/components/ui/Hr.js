import React from 'react'

const Hr = (props) => (
  <hr style={{
    height: props.height,
    border:'none'
  }} />
)
export default Hr

Hr.propTypes = {
  height: React.PropTypes.string.isRequired
};
