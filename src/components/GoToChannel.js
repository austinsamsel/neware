import React from 'react'
import { Link } from 'react-router';

const GoToChannel = ({ ch }) => (
  <Link to={`/${ch}`}>
    <button>Go</button>
  </Link>
)

GoToChannel.propTypes = {
  ch: React.PropTypes.string.isRequired
}

export default GoToChannel
