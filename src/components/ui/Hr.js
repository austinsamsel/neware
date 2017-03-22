import React from 'react'
import s from './Styles.js' // styles utility

const hr_style = (height_val) => {
  return {
    height: height_val,
  }
}

const Hr = (props) => (
  <div data-c='Hr'>
    <hr style={{...hr_style(props.height), ...s.bn}} />
  </div>
)
export default Hr

Hr.propTypes = {
  height: React.PropTypes.string.isRequired
};
