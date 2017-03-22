import React from 'react'

const hr_style = (height_val) => {
  return {
    height: height_val,
    border: 'none',
  }
}

const Hr = (props) => (
  <div data-c='Hr'>
    <hr style={hr_style(props.height)} />
  </div>
)
export default Hr

Hr.propTypes = {
  height: React.PropTypes.string.isRequired
};
