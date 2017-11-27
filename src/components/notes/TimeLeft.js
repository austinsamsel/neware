import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import countdown from 'countdown'
import hourglass from '../../assets/hourglass.png'
import { s } from '../ui/Styles.js'

const icon_hourglass = {
  width: '16px',
  height: 'auto',
  marginRight: '6px',
  verticalAlign: '-3px'
}

const TimeLeft = props => {
  const createdAt = moment(props.createdAt)
  const deleteAt = moment(createdAt).add(1, 'days')
  const timespan = countdown(createdAt, deleteAt).toString()

  return (
    <div data-c="TimeLeft">
      <p
        style={{
          ...s.ff_mono,
          ...s.lightseagreen
        }}
      >
        <img src={hourglass} alt="Timestamp" style={icon_hourglass} />
        {timespan ? `${timespan} left` : 'Running on borrowed time...'}
      </p>
    </div>
  )
}

TimeLeft.propTypes = {
  createdAt: PropTypes.number.isRequired
}

export default TimeLeft
